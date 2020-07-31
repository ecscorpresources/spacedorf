import React from "react";
// import spinner from "../../assets/img/spinner.gif";
import { Spinner } from "@chakra-ui/core";

const MySpinner = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      className="spinner"
    />
  );
};

export default MySpinner;
