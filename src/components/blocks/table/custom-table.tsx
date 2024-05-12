import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Table, TableContainer } from "@chakra-ui/react";
import { CustomTableCaption, TableData, TableHead, TableRow } from "@/components/atoms";

type CustomTableProps = {
  style: CSSProperties;
};

type CustomTableCaption = {
  style: CSSProperties;
};

const CustomTableContainer: FC<PropsWithChildren<CustomTableProps>> = ({ style, children, ...rest }) => {
  return (
    <TableContainer>
      <Table style={style} {...rest}>
        {children}
      </Table>
    </TableContainer>
  );
};

const CustomTable = Object.assign(CustomTableContainer, {
  Caption: CustomTableCaption,
  Th: TableHead,
  Tr: TableRow,
  Td: TableData,
});

export default CustomTable;
