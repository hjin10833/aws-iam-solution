import { FC } from "react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

type Props = {
  name?: string;
};

const CustomAvatar: FC<Props> = ({ name = "" }) => {
  return (
    <Avatar name={name} size={"sm"}>
      <AvatarBadge boxSize="1.25em" bg="green.500" />
    </Avatar>
  );
};

export default CustomAvatar;
