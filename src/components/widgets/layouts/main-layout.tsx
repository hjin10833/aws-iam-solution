import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

/** ============== Inner ============ */
import MainHeader from "../headers/main-header";
import MainFooter from "../footers/main-footer";
import Sidebar from "../sidebars/sidebar";

import * as Styled from "./index.style";

const MainLayout = () => {
  return (
    <>
      {/* 헤더 */}
      <MainHeader />
      {/* 헤더 */}
      <Styled.Empty />
      <Flex>
        {/* 사이드바 */}
        <Styled.LeftSideSection>
          <Sidebar />
        </Styled.LeftSideSection>
        {/* 사이드바 */}
        <Styled.Main>
          <Outlet />
        </Styled.Main>
      </Flex>
    </>
  );
};

export default MainLayout;
