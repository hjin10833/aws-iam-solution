import axios, { AxiosError } from "axios";
import type { ApiError, Loading, RequestFunction } from "./type";

export const handleError = (error: unknown): ApiError => {
  let errorCode: ApiError["code"];
  let errorMsg: ApiError["message"];

  if (axios.isAxiosError(error)) {
    const { message, response } = error as AxiosError;
    errorMsg = message;
    errorCode = response ? response.status : 500;
  } else {
    console.error(error);
    errorMsg = "예상치 못한 에러입니다.";
    errorCode = 500;
  }
  console.error("응답에서 에러가 발생하였습니다. : ", errorMsg);
  return { code: errorCode, message: errorMsg };
};

const handleRequest = async (requestFunction: RequestFunction, loading: Loading) => {
  try {
    if (loading && typeof loading === "function") {
      loading();
    }
    const response = await requestFunction();
    return response;
  } catch (error) {
    const { code, message } = handleError(error);
    return { error: { code, message } };
  }
};

export default { handleError, handleRequest };
