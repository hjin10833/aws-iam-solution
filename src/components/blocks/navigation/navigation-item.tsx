import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import NavHoverBox from "./navigation-hover";

const NavigationItem = ({ href, icon, title, description = "", active = false, navSize }) => {
  const navigation = useNavigate();
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"}>
      <Menu placement="right">
        <MenuButton
          p={3}
          borderRadius={8}
          w={navSize == "large" ? "100%" : "auto"}
          _hover={{ textDecor: "none", backgroundColor: "#3C6EA4", color: "#fff" }}
          onClick={() => navigation(href)}
        >
          <Flex>
            <Icon as={icon} fontSize="xl" color={active ? "white.700" : "gray.500"} />
            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
              {title}
            </Text>
          </Flex>
        </MenuButton>
        {/* <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList> */}
      </Menu>
    </Flex>
  );
};

export default NavigationItem;
