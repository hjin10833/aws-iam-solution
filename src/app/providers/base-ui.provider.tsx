import type { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

/** ============================================================
 *
 *  ============================================================
 */

// import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

import globalStyle from "@/app/configs/style.config";

const BaseUIProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider>
      {children}
      <Global styles={globalStyle} />
    </ChakraProvider>
  );
};

export default BaseUIProvider;
