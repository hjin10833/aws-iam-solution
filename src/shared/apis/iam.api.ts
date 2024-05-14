import privateClient from "../client/private.client";

import handler from "./utils/handler";
import { Loading } from "./utils/type";

const iamApiRoutes = {
  getIam: (param: string) => `/iam?type=${param}`,
};

const requestIamApi = async (endpoint: string, loading: Loading) => {
  return handler.handleRequest(async () => privateClient.get(endpoint), loading);
};

const iamApis = {
  getIam: async (type: string, loading: Loading) => requestIamApi(iamApiRoutes.getIam(type), loading),
  getUserWithoutGroup: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("get_user_without_group"), loading),
  getUserOldAccesskey: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("get_user_old_accesskey"), loading),
  getUserUnusedAccessKey: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("get_user_unused_accesskey"), loading),
  getUserMultipleAccesskey: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("get_user_multiple_accesskey"), loading),
  getCheckPasswordPolicy: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("check_password_policy"), loading),
  getUserWithoutPolicy: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("get_user_without_policy"), loading),
  getInactiveUser: async (loading: Loading) => requestIamApi(iamApiRoutes.getIam("get_inactive_user"), loading),
};
export default iamApis;
