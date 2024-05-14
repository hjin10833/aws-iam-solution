import pageUrlConfig from "@/app/configs/pageUrl.config";

const IAM_USER_URL = {
  withoutGroup: `${pageUrlConfig.iam}${pageUrlConfig.user}/withoutGroup`,
  oldAccessKey: `${pageUrlConfig.iam}${pageUrlConfig.user}/oldAccessKey`,
  unusedAccessKey: `${pageUrlConfig.iam}${pageUrlConfig.user}/unusedAccessKey`,
  multipleAccessKey: `${pageUrlConfig.iam}${pageUrlConfig.user}/multipleAccesskey`,
  checkPwdPolicy: `${pageUrlConfig.iam}${pageUrlConfig.user}/checkPasswordPolicy`,
  getInactiveUser: `${pageUrlConfig.iam}${pageUrlConfig.user}/getInactiveUser`,
  withoutPolicy: `${pageUrlConfig.iam}${pageUrlConfig.user}/withoutPolicy`,
};

export default { IAM_USER_URL };
