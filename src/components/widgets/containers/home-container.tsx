import type { PropsWithChildren } from "react";
import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";

/** Types */
import { UserDTO } from "@/entities/user/user.dto";

/** Styles  */
import * as Styled from "./index.style";

/** Components */
import DefaultTable from "@/components/blocks/table/table";

type HomeContainerProps = {
  handleGetListUsersWithoutGroup: () => Promise<void>;
};

const HomeContainer = ({ handleGetListUsersWithoutGroup, children }: PropsWithChildren<HomeContainerProps>) => {
  const [list, setList] = React.useState<UserDTO[]>([]);

  React.useEffect(() => {
    const response = handleGetListUsersWithoutGroup().then(console.log).catch(console.error);
  }, []);

  return (
    <Styled.Container>
      {/* 헤더 */}
      <Styled.Section>
        <Stack spacing={6} padding={4}>
          <Heading as="h4" size="md" background={"white"} padding={4}>
            IAM 대쉬보드
          </Heading>
        </Stack>
      </Styled.Section>
      {/* 헤더 */}

      {/* 탭 */}
      <Styled.Section>
        <Stack spacing={6} paddingLeft={8} paddingRight={8}>
          <Box background={"white"}>asdasd</Box>
        </Stack>
      </Styled.Section>
      {/* 텝 */}

      {/* 테이블 */}
      <Styled.Section>
        <Stack spacing={6} padding={8}>
          <DefaultTable />
        </Stack>
      </Styled.Section>
      {/* 테이블 */}
    </Styled.Container>
  );
};

export default HomeContainer;
