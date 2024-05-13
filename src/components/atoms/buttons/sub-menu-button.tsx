import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
type Props = {
  size?: "sm" | "md" | "lg";
  title: string;
  weight?: number;
  backgroundColor?: string;
  href?: string;
};

const SubMenuButton: React.FC<Props> = ({ href = "", size = "sm", title = "", weight = 400, backgroundColor = "#fff" }) => {
  const params = useParams();

  const isActive = React.useMemo(() => params.menuId === href.split("/")[3], [params, href]);

  return (
    <Link to={href}>
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
        color={isActive ? "#3C6EA4" : "#4b4f56"}
        _hover={{ bg: "#3C6EA4", color: "#fff" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#fff",
        }}
        _focus={{
          boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        {title}
      </Button>
    </Link>
  );
};

export default SubMenuButton;
