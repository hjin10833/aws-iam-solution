import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

/** ============================================================
 *
 *  ============================================================
 */

// Components
import { Header } from "@/components/blocks";
import { SideBarContainer } from "@/components/widgets";

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
