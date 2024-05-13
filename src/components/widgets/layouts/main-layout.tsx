import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

/** ============== Inner ============ */
import MainHeader from "../headers/main-header";
import MainFooter from "../footers/main-footer";
import MainSideBar from "../sidebars/main-sidebar";
import CustomSidebar from "../sidebars/custom-sidebar";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <div style={{ height: "80px" }} />

      <Flex>
        <CustomSidebar />

        {/* <MainSideBar /> */}
        <main style={{ width: "100%" }}>
          <Outlet />
        </main>
      </Flex>
      {/* <MainFooter /> */}
    </>
  );
};

export default MainLayout;
