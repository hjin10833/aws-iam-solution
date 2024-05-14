export type ApiError = {
  code: number;
  message: string;
};

export type Loading = () => void | undefined;

export type RequestFunction = () => Promise<any>;
