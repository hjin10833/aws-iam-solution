import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Tr } from "@chakra-ui/react";

type Props = {
  style?: CSSProperties;
};

const TableRow: FC<PropsWithChildren<Props>> = ({ style, children, ...rest }) => {
  return (
    <Tr style={style} {...rest}>
      {children}
    </Tr>
  );
};

export default TableRow;
