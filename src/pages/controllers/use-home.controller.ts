import React from "react";
import { iamApis } from "@/shared/apis";

import { UserDTO } from "@/entities/user/user.dto";
import { useMultiState } from "@/shared/hooks";

// UserDTO[]
export default function useHomeController() {
  const [list, dispatchList] = useMultiState({
    userWithoutGroupList: [],
    getUserOldAccesskey: [],
  });

  const setList = (name: string, value: unknown) => dispatchList({ name: name, value: value });

  const onGetListUsersWithoutGroup = () => {
    return iamApis
      .getUserWithoutGroup()
      .then((data) => setList("userWithoutGroupList", data))
      .catch(console.error);
  };

  const onGetUserOldAccesskey = () => {
    iamApis
      .getUserOldAccesskey()
      .then((data) => setList("getUserOldAccesskey", data))
      .catch(console.error);
  };

  React.useEffect(() => {
    onGetListUsersWithoutGroup();
  }, []);

  React.useEffect(() => {
    onGetUserOldAccesskey();
  }, []);

  return { userWithoutGroupList: list.userWithoutGroupList };
}
