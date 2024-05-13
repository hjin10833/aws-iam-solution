import React from "react";
import { useParams } from "react-router-dom";
import { iamApis } from "@/shared/apis";

import { UserDTO } from "@/entities/user/user.dto";
import { useMultiState } from "@/shared/hooks";

enum LIST_STATE_KEY {
  USER_WITHOUT_GROUP_LIST = "userWithoutGroupList",
  GET_USER_OLD_ACCESS_KEY = "getUserOldAccesskey",
  GET_USER_UNUSED_ACCESS_KEY = "userUnusedAccessKey",
  GET_MULTIPLE_ACCESS_KEY = "multipleAccesskey",
  GET_CHECK_PASSWORD_POLICY = "checkPasswordPolicy",
  GET_WITHOUT_POLICY = "getUserWithoutPolicy",
  GET_INACTIVE_USER = "getInactiveUser",

  SHOW_DATA_LIST = "showDataList",
}

enum DATA_STATE_KEY {
  MENU_NAME = "menuName",
  DESCRIPTION = "description",
}

const DEFAULT_DATA = { Arn: "", UserName: "" };

export default function useIamUserController() {
  const params = useParams();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const [data, dispatchData] = useMultiState({
    menuName: "그룹에 속하지 않은 사용자",
    description: "IAM 사용자가 어떤 IAM 그룹에도 속해있지 않습니다.",
  });

  const setData = (name: DATA_STATE_KEY, value: unknown) => dispatchData({ name, value });

  const [list, dispatchList] = useMultiState({
    userWithoutGroupList: [DEFAULT_DATA],
    getUserOldAccesskey: [DEFAULT_DATA],
    userUnusedAccessKey: [DEFAULT_DATA],
    multipleAccesskey: [DEFAULT_DATA],
    checkPasswordPolicy: [DEFAULT_DATA],
    getInactiveUser: [DEFAULT_DATA],

    showDataList: [DEFAULT_DATA],
  });

  const setList = (name: LIST_STATE_KEY, value: unknown) => dispatchList({ name, value });

  const startLoading = () => setLoading(true);

  const endLoading = () => setLoading(false);

  const onGetListUsersWithoutGroup = () => {
    return iamApis
      .getUserWithoutGroup(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.USER_WITHOUT_GROUP_LIST, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };

  const onGetUserOldAccesskey = () => {
    return iamApis
      .getUserOldAccesskey(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.GET_USER_OLD_ACCESS_KEY, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };

  const onGetUserUnusedAccessKey = () => {
    return iamApis
      .getUserUnusedAccessKey(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.GET_USER_UNUSED_ACCESS_KEY, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };
  const onGetMultipleAccesskey = () => {
    return iamApis
      .getUserMultipleAccesskey(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.GET_MULTIPLE_ACCESS_KEY, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };
  const onGetCheckPasswordPolicy = () => {
    return iamApis
      .getCheckPasswordPolicy(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.GET_CHECK_PASSWORD_POLICY, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };
  const onGetUserWithoutPolicy = () => {
    return iamApis
      .getUserWithoutPolicy(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.GET_WITHOUT_POLICY, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };
  const onGetInactiveUser = () => {
    return iamApis
      .getInactiveUser(startLoading)
      .then((data) => {
        setList(LIST_STATE_KEY.GET_INACTIVE_USER, data);
        setList(LIST_STATE_KEY.SHOW_DATA_LIST, data);
        endLoading();
      })
      .catch((error) => {
        setError(error);
        endLoading();
      });
  };

  React.useEffect(() => {
    if (params.menuId !== "withoutGroup") return;
    setData(DATA_STATE_KEY.MENU_NAME, "그룹에 속하지 않은 사용자");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM 사용자가 어떤 IAM 그룹에도 속해있지 않습니다.");
    onGetListUsersWithoutGroup();
  }, [params]);

  React.useEffect(() => {
    if (params.menuId !== "oldAccessKey") return;
    setData(DATA_STATE_KEY.MENU_NAME, "사용자 액세스키 미교체");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM 사용자의 액세스 키가 90일 넘게 교체되지 않았습니다.");
    onGetUserOldAccesskey();
  }, [params]);

  React.useEffect(() => {
    if (params.menuId !== "unusedAccessKey") return;
    setData(DATA_STATE_KEY.MENU_NAME, "사용자 미사용 액세스키");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM 사용자의 액세스 키가 90일동안 사용되지 않았습니다.");
    onGetUserUnusedAccessKey();
  }, [params]);

  React.useEffect(() => {
    if (params.menuId !== "multipleAccesskey") return;
    setData(DATA_STATE_KEY.MENU_NAME, "사용자 액세스키 2개 이상");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM 사용자의 액세스 키가 2개 이상 존재합니다.");
    onGetMultipleAccesskey();
  }, [params]);

  React.useEffect(() => {
    if (params.menuId !== "checkPasswordPolicy") return;
    setData(DATA_STATE_KEY.MENU_NAME, "접속하지 않은 사용자");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM 기본 암호정책이 아닌 암호정책을 설정하고있습니다.");
    onGetCheckPasswordPolicy();
  }, [params]);

  React.useEffect(() => {
    if (params.menuId !== "withoutPolicy") return;
    setData(DATA_STATE_KEY.MENU_NAME, "연결된 정책이 없는 사용자");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM User에 연결된 정책이 없습니다.");
    onGetUserWithoutPolicy();
  }, [params]);

  React.useEffect(() => {
    if (params.menuId !== "getInactiveUser") return;
    setData(DATA_STATE_KEY.MENU_NAME, "장기 미접속 사용자");
    setData(DATA_STATE_KEY.DESCRIPTION, "IAM 사용자가 90일 동안 접속한 기록이 없습니다.");
    onGetInactiveUser();
  }, [params]);

  return {
    loading,
    error,
    menuName: data.menuName,
    description: data.description,
    list: list.showDataList,
  };
}
