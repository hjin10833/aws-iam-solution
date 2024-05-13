import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  size?: "sm" | "md" | "lg";
  title: string;
  weight?: number;
  backgroundColor?: string;
};

const SubMenuButton: React.FC<Props> = ({ size = "sm", title = "", weight = 400, backgroundColor = "#fff" }) => {
  return (
    <Button
      as="button"
      size={size}
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="8px"
      rounded="8px"
      fontSize="14px"
      fontWeight={weight}
      background={backgroundColor}
      color="#4b4f56"
      _hover={{ bg: "#ebedf0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      {title}
    </Button>
  );
};

export default SubMenuButton;
