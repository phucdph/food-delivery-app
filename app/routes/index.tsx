import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  ShouldRevalidateFunction,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import Box from "~/components/Box";
import Button from "~/components/Button";
import SegmentControl from "~/components/SegmentControl";
import restaurantService from "~/services/restaurant.server";
import categoryService from "~/services/category.server";

import type { IRestaurant } from "~/services/typings";
import RestaurantItem from "~/components/RestaurantItem";
import Input from "~/components/Input";
import { AiOutlineSearch } from "react-icons/ai";
import Empty from "~/components/Empty";
import useDebouncedValue from "~/hooks/useDebouncedValue";

export const loader = async ({ request }: LoaderArgs) => {
  const [restaurants, categories] = await Promise.all([
    restaurantService.getRestaurants(),
    categoryService.getCategories(),
  ]);
  return json(
    {
      restaurants,
      categories,
    },
    {
      headers: { "Cache-Control": "public, max-age=120" },
    }
  );
};

export const shouldRevalidate = () => false;

const PAGE_SIZE = 20;

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("q") || "";

  const [debouncedSearchText] = useDebouncedValue(searchText, 300);

  const setSearchText = useCallback(
    (t: string) => {
      setSearchParams((prev) => {
        if (!t) {
          prev.delete("q");
          return prev;
        }
        if (prev.get("q")) {
          prev.set("q", t);
        } else {
          prev.append("q", t);
        }
        return prev;
      });
    },
    [setSearchParams]
  );

  const restaurants = loaderData?.restaurants;

  const category = searchParams.get("category") || "all";

  useEffect(() => {
    setLimit(PAGE_SIZE);
  }, [category]);

  const setCategory = useCallback(
    (c: string) => {
      setSearchParams((prev) => {
        if (prev.get("category")) {
          prev.set("category", c);
        } else {
          prev.append("category", c);
        }
        return prev;
      });
    },
    [setSearchParams]
  );

  const restaurantByCategory = useMemo(
    () =>
      restaurants?.reduce((acc: { [key: string]: IRestaurant[] }, value) => {
        if (acc[value.categoryId]) {
          acc[value.categoryId].push(value);
        } else {
          acc[value.categoryId] = [];
        }
        return acc;
      }, {}),
    [restaurants]
  );

  const categories = loaderData?.categories;

  const [limit, setLimit] = useState(PAGE_SIZE);

  const filteredRestaurants =
    category !== "all" ? restaurantByCategory[category] : restaurants;

  const searchResult = useMemo(() => {
    return filteredRestaurants?.filter((r) =>
      r.name
        ?.toLocaleLowerCase()
        ?.includes(debouncedSearchText?.toLocaleLowerCase())
    );
  }, [filteredRestaurants, debouncedSearchText]);

  const hasNext = searchResult?.length > limit;

  const isEmpty = !searchResult?.length;

  const paginatedRestaurants = useMemo(
    () => searchResult?.slice(0, limit),
    [limit, searchResult]
  );

  const handleLoadMore = () => setLimit((prev) => prev + PAGE_SIZE);

  const segmentControlValues = useMemo(
    () => [
      { value: "all", title: "All" },
      ...categories?.map((c) => ({ title: c.name, value: c.id })),
    ],
    [categories]
  );

  return (
    <Box bg="$gray100" minHeight="100vh" width="full">
      <Box
        paddingX={{
          base: "$sm",
          xs: "$sm",
          sm: "$sm",
          md: "$xl",
          lg: "$xl",
          xl: "12vw",
        }}
        paddingY="$md"
        bg="transparent"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          rowGap="$sm"
        >
          <Input
            icon={<AiOutlineSearch size="1.5rem" />}
            placeholder="Enter restaurant name..."
            w={{
              base: "100%",
              md: "300px",
              lg: "300px",
              xl: "300px",
              xs: "100%",
              sm: "300px",
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SegmentControl
            data={segmentControlValues}
            value={category}
            onChange={setCategory}
          />
        </Box>
        {isEmpty ? (
          <Empty />
        ) : (
          <>
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "$1",
                xs: "$2",
                sm: "$2",
                md: "$3",
                lg: "$4",
                xl: "$4",
              }}
              gridGap="$lg"
              mt="$md"
            >
              {paginatedRestaurants?.map((restaurant) => (
                <RestaurantItem data={restaurant} key={restaurant.id} />
              ))}
            </Box>
            {hasNext && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt="$md"
              >
                <Button onClick={handleLoadMore}>Show More</Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
