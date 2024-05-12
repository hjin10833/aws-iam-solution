import type { CSSProperties, FC, PropsWithChildren } from "react";

import { TableCaption } from "@chakra-ui/react";

type TableCaptionProps = {
  style: CSSProperties;
};

const CustomTableCaption: FC<PropsWithChildren<TableCaptionProps>> = ({ style, children, ...rest }) => {
  return (
    <TableCaption style={style} {...rest}>
      {children}
    </TableCaption>
  );
};

export default CustomTableCaption;
