import React from "react";

import * as Header from "./index.style";
import { CustomAvatar, LogoIcon } from "@/components/atoms";

const MainHeader = () => {
  return (
    <>
      <Header.Container>
        <Header.Gnb>
          <Header.Logo>
            <LogoIcon />
          </Header.Logo>
          <Header.Ul>
            <Header.Li>
              <CustomAvatar name="jhj" />
            </Header.Li>
          </Header.Ul>
        </Header.Gnb>
      </Header.Container>
    </>
  );
};

export default MainHeader;
