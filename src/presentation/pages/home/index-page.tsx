import React from "react";
import { Link } from "react-router-dom";
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";

// ======================

import * as Styled from "./index.style";
import { iamUserURL } from "@/shared/constants/page.constant";

const HomePage = () => {
  return (
    <>
      <Styled.Container>
        {/*              
        
          IAM USER 목록
        
         */}
        <Styled.Section style={{ marginTop: "1vh" }}>
          <Stack spacing={1} padding={8} direction="column" align="stretch">
            <Heading as="h3" size={"lg"} marginBottom={4}>
              IAM USER 기능
            </Heading>

            <div style={{ borderBottom: "1px solid #eaeaea", padding: "8px 0" }}>
              <List display={"flex"} alignItems={"center"} gap={8}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  완료
                </ListItem>
                <ListItem>
                  <ListIcon as={MdSettings} color="green.500" />
                  수정중
                </ListItem>
              </List>
            </div>
            <div style={{ marginTop: "8px" }}>
              <List spacing={4}>
                <ListItem>
                  <Link to={iamUserURL.withoutGroup}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    그룹에 속하지 않은 사용자
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={iamUserURL.oldAccessKey}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    사용자 액세스 미교체
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={iamUserURL.unusedAccessKey}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    사용자 미사용 액세스키
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={iamUserURL.multipleAccessKey}>
                    <ListIcon as={MdSettings} color="green.500" />
                    사용자 액스시키 2개 이상
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={iamUserURL.checkPwdPolicy}>
                    <ListIcon as={MdSettings} color="green.500" />
                    접속하지 않은 사용자
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={iamUserURL.getInactiveUser}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    장기 미접속 사용자
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={iamUserURL.withoutPolicy}>
                    <ListIcon as={MdSettings} color="green.500" />
                    연결된 정책이 없는 사용자
                  </Link>
                </ListItem>
              </List>
            </div>
          </Stack>
        </Styled.Section>
        {/*              
        
        IAM GROUP 목록


         */}
        <Styled.Section style={{ marginTop: "1vh" }}>
          <Stack spacing={1} padding={8} direction="column" align="stretch">
            <Heading as="h3" size={"lg"} marginBottom={4}>
              IAM GROUP 기능
            </Heading>

            <div style={{ borderBottom: "1px solid #eaeaea", padding: "8px 0" }}>
              <List display={"flex"} alignItems={"center"} gap={8}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  완료
                </ListItem>
                <ListItem>
                  <ListIcon as={MdSettings} color="green.500" />
                  수정중
                </ListItem>
              </List>
            </div>
            <div style={{ marginTop: "8px" }}>
              <List spacing={4}>
                <ListItem>
                  <ListIcon as={MdSettings} color="green.500" />
                  그룹 내 사용자 존재 유무
                </ListItem>
              </List>
            </div>
          </Stack>
        </Styled.Section>
        {/* 테이블 */}
      </Styled.Container>
    </>
  );
};

export default HomePage;
