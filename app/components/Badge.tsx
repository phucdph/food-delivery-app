import React from "react";
import type { BoxProps } from "./Box";
import Box from "./Box";

interface Props extends BoxProps<"div"> {}

const Badge: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Box
      py="$xs"
      px="$sm"
      borderTopLeftRadius="$lg"
      borderBottomRightRadius="$lg"
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Badge;
