import React from "react";
import type { BoxProps } from "./Box";
import Box from "./Box";

interface Props extends BoxProps<"input"> {
  icon?: React.ReactNode;
}

const Input: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { icon, w, ...rest } = props;

  return (
    <Box as="span" position="relative" w={w}>
      {icon && (
        <Box
          position="absolute"
          w="28px"
          left={"4px"}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
      )}
      <Box
        as="input"
        w={icon ? "calc(100% - 32px)" : "100%"}
        pr={"0px"}
        pl={icon ? "32px" : null}
        borderWidth="1px"
        borderStyle="solid"
        borderColor={{
          focus: "$yellow600",
          hover: "$yellow600",
        }}
        outline={"none"}
        transition="ease .2s"
        {...rest}
      />
    </Box>
  );
};

export default Input;
