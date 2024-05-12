import React from "react";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

// Controller
import useHomeController from "@/pages/controllers/use-home.controller";

import DefaultTable from "@/components/blocks/table/table";

import * as Styled from "./index.style";
import { UserDTO } from "@/entities/user/user.dto";

const HomePage = () => {
  const { userWithoutGroupList } = useHomeController();

  console.log("여기", userWithoutGroupList);
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
          <Flex>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              사용자 엑세스키 미교체
            </Button>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              사용자 미사용 액세스키
            </Button>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              사용자 액세스키 2개 이상
            </Button>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              접속하지 않은 사용자
            </Button>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              장기 미접속 사용자
            </Button>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              연결된 정책이 없는 사용잔
            </Button>
            <Button size={"sm"} fontWeight={400} background={"white"}>
              그룹에 속하지 않은 사용자
            </Button>
          </Flex>
        </Stack>
      </Styled.Section>
      {/* 텝 */}

      {/* 테이블 */}
      <Styled.Section>
        <Stack spacing={6} padding={8}>
          <TableContainer background={"white"}>
            <Table variant="simple">
              <Thead background={"ButtonFace"}>
                <Tr>
                  <Th>userName</Th>
                  <Th>Arn</Th>
                </Tr>
              </Thead>
              {/* 테이블 바디 */}
              <Tbody>
                {userWithoutGroupList.map((data: UserDTO, index: number) => (
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
