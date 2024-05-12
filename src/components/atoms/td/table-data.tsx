import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Td } from "@chakra-ui/react";

type Props = {
  style?: CSSProperties;
};

const TableData: FC<PropsWithChildren<Props>> = ({ style, children, ...rest }) => {
  return (
    <Td style={style} {...rest}>
      {children}
    </Td>
  );
};

export default TableData;
