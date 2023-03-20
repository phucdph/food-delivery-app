import React from "react";
import { MdSearchOff } from "react-icons/md";
import Box from "./Box";

interface Props {}

const Empty: React.FC<Props> = (props) => {
  return (
    <Box
      w="100%"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <MdSearchOff size="7rem" />
      <Box as="span" mt="$lg">No restaurant found. Please try different keyword.</Box>
    </Box>
  );
};

export default Empty;
