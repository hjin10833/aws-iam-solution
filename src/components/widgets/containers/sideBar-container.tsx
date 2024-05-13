import React from "react";
import styled from "@emotion/styled";
import { SideBar } from "@/components/blocks";

const SideBarContainer = () => {
  return (
    <Container>
      <SideBar />
    </Container>
  );
};

export default SideBarContainer;

export const Container = styled.section`
  box-sizing: border-box;
  background-color: #f0f0f0;
  margin-top: 1vh;
  /* padding-left: 8px; */
`;
