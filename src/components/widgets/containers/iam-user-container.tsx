import type { PropsWithChildren } from "react";
import { Divider, Flex, Heading, Spinner, Stack } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import styled from "@emotion/styled";

/** ============================================================
 *
 *  ============================================================
 */

// Entities
import { UserDTO } from "@/entities/user/user.dto";
// Shared
import { isEmptyArrayHelper } from "@/shared/helpers";
// Components
import { SubMenu } from "@/components/blocks";

const Container = styled.div`
  width: 100%;
  height: 97vh;
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f0f0f0;
  overflow-y: scroll;
`;

const Section = styled.section`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  border-radius: 12px;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

type Props = {
  menuName: string;
  description: string;
  list: UserDTO[];
  loading?: boolean;
  error?: Error | null;
};

const IAMUserContainer = ({ description = "", menuName = "", list, loading = false, error = null }: PropsWithChildren<Props>) => {
  return (
    <>
      <Container>
        <Section style={{ marginTop: "1vh" }}>
          <SubMenu />
        </Section>
        {/* 텝 */}

        {/* 테이블 */}
        <Section>
          <Stack spacing={1} padding={8} direction="column" align="stretch">
            <Heading as="h3" size={"lg"}>
              {menuName}
            </Heading>

            {description && (
              <Flex padding={4} paddingBottom={0}>
                <Heading as="h6" fontWeight={400} size={"sm"}>
                  {description}
                </Heading>
              </Flex>
            )}
            <Divider padding={4} />

            <TableContainer background={"#fff"} flex="1" padding={8}>
              <Table variant="simple" size="md">
                <Thead background={"ButtonFace"}>
                  <Tr>
                    <Th style={thStyle}>USER NAME</Th>
                    <Th style={thStyle}>Arn</Th>
                  </Tr>
                </Thead>

                {/* 테이블 바디 */}

                <Tbody>
                  {loading && (
                    <Td colSpan={12}>
                      <LoadingWrapper>
                        <Spinner size="xl" thickness="4px" color="blue.500" />
                      </LoadingWrapper>
                    </Td>
                  )}
                  {!loading &&
                    !isEmptyArrayHelper(list) &&
                    list?.map((data: UserDTO, index: number) => (
                      <Tr key={index}>
                        <Td>{data.UserName || "-"}</Td>
                        <Td>{data.Arn || "-"}</Td>
                      </Tr>
                    ))}

                  {!loading && isEmptyArrayHelper(list) && (
                    <Td colSpan={4}>
                      <LoadingWrapper>
                        <Heading as="h3" size={"md"} color={"#D62E2A"}>
                          요청 시간이 지연되었습니다. 다시 시도해주시기 바랍니다.
                        </Heading>
                      </LoadingWrapper>
                    </Td>
                  )}
                </Tbody>
                {/* 테이블 바디 */}
              </Table>
            </TableContainer>
          </Stack>
        </Section>
        {/* 테이블 */}
      </Container>
    </>
  );
};

export default IAMUserContainer;

const thStyle = {
  maxWidth: "200px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderBottom: "2px solid #ccc",
  fontSize: "18px",
};
