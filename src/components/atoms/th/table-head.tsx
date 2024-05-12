import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Th } from "@chakra-ui/react";

type Props = {
  style?: CSSProperties;
};

const TableHead: FC<PropsWithChildren<Props>> = ({ style, children, ...rest }) => {
  return (
    <Th style={style} {...rest}>
      {children}
    </Th>
  );
};

export default TableHead;
