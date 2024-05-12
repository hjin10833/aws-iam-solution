import React from "react";

import * as SideBar from "./index.style";

const MainSideBar = () => {
  return (
    <SideBar.Container>
      <SideBar.Gnb>
        <SideBar.Ul>
          <SideBar.Li>IAM설정</SideBar.Li>
        </SideBar.Ul>
      </SideBar.Gnb>
    </SideBar.Container>
  );
};

export default MainSideBar;
