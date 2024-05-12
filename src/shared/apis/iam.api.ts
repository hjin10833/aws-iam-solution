// VO
import customConsole from "@/shared/helpers/custom-consoler";
// API
import publicClient from "../client/public.client";
// import privateClient from "../client/private.client";
// Handler
import { handleError } from "./utils/helper";
import privateClient from "../client/private.client";

const { fulfilled, pending, reject } = customConsole;

const iamApiRoutes = {
  getIam: (param: string) => `/iam?type=${param}`,
};
const iamApis = {
  getIam: async (type: string) => {
    try {
      pending({ label: "요청", message: "Sending a request to retrieve user information...." });
      const response = await privateClient.get(iamApiRoutes.getIam(type));
      fulfilled({ label: "완료", message: "Your information has been successfully answered!" });
      return response;
    } catch (error) {
      const { code, message } = handleError(error);
      reject({ label: "취소", message });
      return { error: { code, message } };
    }
  },
  getUserWithoutGroup: async () => {
    try {
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
