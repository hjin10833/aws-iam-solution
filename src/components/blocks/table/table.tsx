import React from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

const DefaultTable = () => {
  return (
    <TableContainer background={"white"}>
      <Table variant="simple">
        <TableCaption>Table Captioddddn</TableCaption>
        <Thead background={"ButtonFace"}>
          <Tr>
            <Th>userName</Th>
            <Th>UserId</Th>
            <Th>Arn</Th>
          </Tr>
        </Thead>
        {/* 테이블 바디 */}
        <Tbody>
          <Tr>
            <Td>TD 1</Td>
            <Td>TD 2</Td>
            <Td>TD 3</Td>
          </Tr>
          <Tr>
            <Td>TD 4</Td>
            <Td>TD 5</Td>
            <Td>TD 6</Td>
          </Tr>
          <Tr>
            <Td>TD 4</Td>
            <Td>TD 5</Td>
            <Td>TD 6</Td>
          </Tr>
          <Tr>
            <Td>TD 4</Td>
            <Td>TD 5</Td>
            <Td>TD 6</Td>
          </Tr>
          <Tr>
            <Td>TD 4</Td>
            <Td>TD 5</Td>
            <Td>TD 6</Td>
          </Tr>
          <Tr>
            <Td>TD 4</Td>
            <Td>TD 5</Td>
            <Td>TD 6</Td>
          </Tr>
          <Tr>
            <Td>TD 4</Td>
            <Td>TD 5</Td>
            <Td>TD 6</Td>
          </Tr>
        </Tbody>
        {/* 테이블 바디 */}
        {/* 테이블 푸터 */}
        <Tfoot>
          <Tr>
            <Th>Footer 1</Th>
            <Th>Footer 2</Th>
            <Th>Footer 3</Th>
          </Tr>
        </Tfoot>
        {/* 테이블 푸터 */}
      </Table>
    </TableContainer>
  );
};

export default DefaultTable;
