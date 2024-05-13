import React from "react";
import { Flex, Text, IconButton, Divider, Avatar, Heading } from "@chakra-ui/react";
import { FiMenu, FiHome, FiUser, FiSettings } from "react-icons/fi";

import { NavigationItem } from "@/components/blocks";

type NavigationSize = "large" | "small";

function navSizeChecker(size: NavigationSize) {
  return size === "small";
}

const CustomSidebar = () => {
  const [navSize, changeNavSize] = React.useState<NavigationSize>("small");

  return (
    <Flex
      pos="sticky"
      left="5"
      // h="95vh"
      marginTop="1vh"
      background="#fff"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSizeChecker(navSize) ? "15px" : "12px"}
      w={navSizeChecker(navSize) ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" w="100%" alignItems={navSizeChecker(navSize) ? "center" : "flex-start"} as="nav">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSizeChecker(navSize)) {
              return changeNavSize("large");
            } else {
              return changeNavSize("small");
            }
          }}
          aria-label={"button"}
        />
        <Divider display={navSize == "small" ? "none" : "flex"} />

        <NavigationItem href="/" navSize={navSize} icon={FiHome} title="HOME" description="This is the description for the IAM dashboard." />

        <NavigationItem href="iam/user/withoutGroup" navSize={navSize} icon={FiUser} title="IAM" description="This is the description for the IAM dashboard." />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} mb={4} padding={4}>
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
            <Heading as="h3" size="sm">
              JHJ
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomSidebar;
