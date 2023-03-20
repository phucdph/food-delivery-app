import React from "react";
import type { IRestaurant } from "~/services/typings";
import Box from "./Box";
import { AiFillGift, AiFillStar } from "react-icons/ai";
import { MdPercent} from "react-icons/md";

import Badge from "./Badge";

interface Props {
  data: IRestaurant;
}

const RestaurantItem: React.FC<Props> = (props) => {
  const { data: restaurant } = props;
  return (
    <Box
      borderRadius="$lg"
      bg={{
        base: "$white",
        hover: "$yellow100",
      }}
      cursor="pointer"
      key={restaurant.id}
      transition="ease .2s"
      boxShadow={{
        base: "2px 2px 4px 0px rgba(0,0,0,0.1)",
        hover: "3px 4px 6px 0px rgba(0,0,0,0.2)",
      }}
      position="relative"
    >
      {restaurant?.isNew && (
        <Badge position="absolute" left="0px" top="0px" bg="$blue700">
          <AiFillGift color="white" />
        </Badge>
      )}
      {!!restaurant?.promotion && (
        <Badge position="absolute" left="0px" top="0px" bg="$red500">
          <MdPercent color="white" />
        </Badge>
      )}
      <Box
        as="img"
        borderRadius="$lg"
        backgroundColor="$slate200"
        width="100%"
        height="150px"
        src={restaurant?.imageUrl}
        style={{ objectFit: "cover", height: 150, width: "100%" }}
      />
      <Box p="$md">
        <Box as="span" fontWeight="$medium">
          {restaurant?.name}
        </Box>
        <Box mt="$sm" display="flex">
          <Box
            bg="$yellow700"
            color="$white"
            px="$xs"
            py="2px"
            borderRadius="$sm"
            mr="$xs"
            fontSize="$sm"
            display="flex"
            alignItems="center"
          >
            <AiFillStar />{" "}
            <Box as="span" ml="4px">
              {restaurant?.rating?.toFixed(1)}
            </Box>
          </Box>
          <Box
            bg="$yellow700"
            color="$white"
            px="$xs"
            py="2px"
            borderRadius="$sm"
            fontSize="$sm"
          >
            {restaurant?.minCookTime}-{restaurant?.maxCookTime} mins
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(RestaurantItem);
