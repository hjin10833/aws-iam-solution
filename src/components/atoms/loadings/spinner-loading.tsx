import { Spinner } from "@chakra-ui/react";
import React from "react";

const SpinnerLoading = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "rgba(227, 217, 217, 0.8)",
      }}
    >
      <Spinner size="xl" thickness="4px" color="blue.500" />
    </div>
  );
};

export default SpinnerLoading;
