import React from "react";

import * as Header from "./index.style";
import { LogoIcon } from "@/components/atoms";

const MainHeader = () => {
  return (
    <Header.Container>
      <Header.Gnb>
        <Header.Logo>
          <LogoIcon />
        </Header.Logo>
        <Header.Ul>
          <Header.Li>전혜진</Header.Li>
        </Header.Ul>
      </Header.Gnb>
    </Header.Container>
  );
};

export default MainHeader;
