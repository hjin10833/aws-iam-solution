import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

/** ============================================================
 *
 *  ============================================================
 */

// Components
import { LogoIcon } from "@/components/atoms";

// Style
import * as HeaderStyled from "./index.style";

const Header = () => {
  return (
    <>
      <HeaderStyled.Container>
        <HeaderStyled.Gnb>
          <HeaderStyled.Logo>
            <Link to="/">
              <LogoIcon width={200} />
            </Link>
          </HeaderStyled.Logo>
          <HeaderStyled.Ul>
            <HeaderStyled.Li>
              <Avatar size="sm" src="avatar-1.jpg" />
            </HeaderStyled.Li>
          </HeaderStyled.Ul>
        </HeaderStyled.Gnb>
      </HeaderStyled.Container>
    </>
  );
};

export default Header;
