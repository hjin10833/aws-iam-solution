import React from "react";
import { iamApis } from "@/shared/apis";

import { UserDTO } from "@/entities/user/user.dto";
import { useMultiState } from "@/shared/hooks";

enum STATE_KEY {
  USER_WITHOUT_GROUP_LIST = "userWithoutGroupList",
  GET_USER_OLD_ACCESS_KEY = "getUserOldAccesskey",
}

export default function useHomeController() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const [list, dispatchList] = useMultiState({
    userWithoutGroupList: [{ Arn: "", UserName: "" }],
    getUserOldAccesskey: [{ Arn: "", UserName: "" }],
  });

  const setList = (name: STATE_KEY, value: unknown) => dispatchList({ name, value });

  const startLoading = () => setLoading(true);

  const endLoading = () => setLoading(false);

  const onGetListUsersWithoutGroup = () => {
    return iamApis
      .getUserWithoutGroup(startLoading)
      .then((data) => {
        setList(STATE_KEY.USER_WITHOUT_GROUP_LIST, data);
        endLoading();
      })
      .catch((error) => setError(error));
  };

  const onGetUserOldAccesskey = () => {
    return iamApis
      .getUserOldAccesskey()
      .then((data) => setList(STATE_KEY.GET_USER_OLD_ACCESS_KEY, data))
      .catch((error) => setError(error));
  };

  React.useEffect(() => {
    onGetListUsersWithoutGroup();
  }, []);

  React.useEffect(() => {
    onGetUserOldAccesskey();
  }, []);

  return {
    loading,
    error,

    userWithoutGroupList: list.userWithoutGroupList as UserDTO[],
    getUserOldAccesskey: list.getUserOldAccesskey as UserDTO[],
  };
}
