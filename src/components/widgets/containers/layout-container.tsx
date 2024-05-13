import React from "react";
import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

/** ============== Inner ============ */

import SideBarContainer from "./sideBar-container";
import { Header } from "@/components/blocks";

const LayoutContainer = () => {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 헤더 */}
      <Flex as="main" flexDirection={"row"} marginTop={"3.5vh"} background={"#f0f0f0"}>
        {/* 사이드바 */}
        <SideBarContainer />
        {/* 사이드바 */}

        <Outlet />
      </Flex>
    </>
  );
};

export default LayoutContainer;
