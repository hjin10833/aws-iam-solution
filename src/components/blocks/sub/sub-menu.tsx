import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Divider, Flex, Stack } from "@chakra-ui/react";

/** ============================================================
 *
 *  ============================================================
 */

// Configs
import pageUrlConfig from "@/app/configs/pageUrl.config";

// Components
import { SubMenuButton } from "@/components/atoms";

type MiddleMenu = "user" | "group";
const SubMenu = () => {
  const location = useLocation();

  const [mdMenuActive, setMdMenuActive] = React.useState<MiddleMenu>("user");

  useCallback(() => setMdMenuActive(location.pathname.split("/")[2] as MiddleMenu), [location]);

  return (
    <>
      <Stack spacing={6} padding={2} paddingLeft={8} paddingRight={8}>
        <Flex>
          <Link to={`${pageUrlConfig.iam}${pageUrlConfig.user}/withoutGroup`}>
            <Button background={"#fff"} color={mdMenuActive === "user" ? "#3C6EA4" : "#000"}>
              USER
            </Button>
          </Link>
          <Link to={"/"}>
            <Button background={"#fff"}>GROUP</Button>
          </Link>
        </Flex>
        <Divider />
        {/* 탭 */}
        <Flex flexWrap="wrap" gap={4}>
          <SubMenuButton title="그룹에 속하지 않은 사용자" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/withoutGroup`} />
          <SubMenuButton title="사용자 엑세스키 미교체" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/oldAccessKey`} />
          <SubMenuButton title="사용자 미사용 액세스키" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/unusedAccessKey`} />
          <SubMenuButton title="사용자 액세스키 2개 이상" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/multipleAccesskey`} />
          <SubMenuButton title="접속하지 않은 사용자" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/checkPasswordPolicy`} />
          <SubMenuButton title="장기 미접속 사용자" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/getInactiveUser`} />
          <SubMenuButton title="연결된 정책이 없는 사용자" href={`${pageUrlConfig.iam}${pageUrlConfig.user}/withoutPolicy`} />
        </Flex>
      </Stack>
    </>
  );
};

export default SubMenu;
