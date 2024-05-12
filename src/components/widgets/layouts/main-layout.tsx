import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

/** ============== Inner ============ */
import MainHeader from "../headers/main-header";
import MainFooter from "../footers/main-footer";
import MainSideBar from "../sidebars/main-sidebar";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Flex>
        <MainSideBar />
        <Outlet />
      </Flex>
      {/* <MainFooter /> */}
    </>
  );
};

export default MainLayout;
