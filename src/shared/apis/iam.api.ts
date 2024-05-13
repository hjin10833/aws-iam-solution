import privateClient from "../client/private.client";
import { handleError } from "./utils/helper";

const iamApiRoutes = {
  getIam: (param: string) => `/iam?type=${param}`,
};
const iamApis = {
  getIam: async (type: string) => {
    try {
      const response = await privateClient.get(iamApiRoutes.getIam(type));
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  getUserWithoutGroup: async (loading: () => void | undefined) => {
    try {
      if (loading && typeof loading === "function") {
        loading();
      }
      const response = await privateClient.get(iamApiRoutes.getIam("get_user_without_group"));
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },

  getUserOldAccesskey: async () => {
    try {
      const response = await privateClient.get(iamApiRoutes.getIam("get_user_old_accesskey"));
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  /** GET USER UNUSED Accesskey*/
  getUserUnusedAccessKey: async () => {
    try {
      const response = await privateClient.get(iamApiRoutes.getIam("get_user_unused_accesskey"));
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  getUserMultipleAccesskey: async () => {
    try {
      const response = await privateClient.get(iamApiRoutes.getIam(" get_user_multiple_accesskey"));
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  getCheckPasswordPolicy: async () => {
    try {
      const response = await privateClient.get(iamApiRoutes.getIam("check_password_policy"));
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
};
export default iamApis;
