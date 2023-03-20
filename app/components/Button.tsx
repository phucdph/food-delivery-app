import React from "react";
import type { BoxProps } from "./Box";
import Box from "./Box";

interface Props extends BoxProps<"button"> {}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Box
      as="button"
      bg={{
        hover: "$yellow600",
        base: "$white"
      }}
      borderRadius="$md"
      px="$lg"
      py="$xs"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="$yellow700"
      
      c={{
        base: "$yellow700",
        hover: "$white",
      }}
      transition="ease .2s"
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Button;
