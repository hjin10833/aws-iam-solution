import React from "react";
import { Button, Flex, Spinner, Stack } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

// Controller
import useHomeController from "@/pages/controllers/use-home.controller";

import * as Styled from "./index.style";
import { UserDTO } from "@/entities/user/user.dto";
import { SubMenuButton } from "@/components/atoms";
import { isEmptyArrayHelper } from "@/shared/helpers";

const HomePage = () => {
  const { loading, userWithoutGroupList } = useHomeController();

  console.log(userWithoutGroupList);
  return (
    <Styled.Container>
      {/* 헤더 */}
      {/* <Styled.Section>
        <Stack spacing={6} padding={4}>
          <Heading as="h4" size="md" background={"white"} padding={4}>
            get_user_old_accesskey
          </Heading>
          <Heading as="h4" size="sm" fontWeight={400} background={"white"} paddingLeft={4} paddingRight={4}>
            IAM 사용자의 액세스 키가 90일 넘게 교체되지 않았습니다.
          </Heading>
        </Stack>
      </Styled.Section> */}
      {/* 헤더 */}

      <Styled.Section>
        <Stack spacing={6} paddingLeft={8} paddingRight={8} borderBottom={"1px solid #eaeaea"}>
          <Flex>
            <Button background={"white"}>USER</Button>
            <Button background={"white"}>GROUP</Button>
          </Flex>
        </Stack>

        {/* 탭 */}

        <Stack spacing={6} padding={4} paddingLeft={8} paddingRight={8}>
          <Flex flexWrap="wrap" gap={4}>
            <SubMenuButton title="그룹에 속하지 않은 사용자" />
            <SubMenuButton title="그사용자 엑세스키 미교체" />
            <SubMenuButton title="사용자 미사용 액세스키" />
            <SubMenuButton title="사용자 액세스키 2개 이상" />
            <SubMenuButton title="접속하지 않은 사용자" />
            <SubMenuButton title="장기 미접속 사용자" />
            <SubMenuButton title="연결된 정책이 없는 사용자" />
          </Flex>
        </Stack>
      </Styled.Section>
      {/* 텝 */}

      {/* 테이블 */}
      <Styled.Section>
        <Stack spacing={6} padding={8} direction="row" align="stretch">
          <TableContainer background={"white"} flex="1">
            {loading && (
              <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Spinner />
              </div>
            )}

            <Table variant="simple" size="sm">
              <Thead background={"ButtonFace"}>
                <Tr>
                  <Th style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>userName</Th>
                  <Th style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Arn</Th>
                </Tr>
              </Thead>
              {/* 테이블 바디 */}
              <Tbody>
                {!isEmptyArrayHelper(userWithoutGroupList) &&
                  [...userWithoutGroupList]?.map((data: UserDTO, index: number) => (
                    <Tr key={index}>
                      <Td>{data.UserName}</Td>
                      <Td>{data.Arn}</Td>
                    </Tr>
                  ))}
              </Tbody>
              {/* 테이블 바디 */}
            </Table>
          </TableContainer>
        </Stack>
      </Styled.Section>
      {/* 테이블 */}
    </Styled.Container>
  );
};

export default HomePage;
