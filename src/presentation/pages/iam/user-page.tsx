import React from "react";

// Controller
import { useIamUserController } from "@/presentation/controllers";

import { IAMUserContainer } from "@/components/widgets";

const IAMUserPage = () => {
  const { description, menuName, list, loading, error } = useIamUserController();

  console.log(list, error);
  // 에러 예외처리
  if (error) return <IAMUserContainer list={[{ Arn: "", UserName: "" }]} loading={loading} error={error} menuName={menuName} description={description} />;

  // Response Data 예외처리
  if (list.error) return <IAMUserContainer list={[]} loading={loading} error={error} menuName={menuName} description={description} />;

  // Response Data 예외처리
  if (list.data === null || list.data === false)
    return <IAMUserContainer list={[{ Arn: "", UserName: "" }]} loading={loading} error={error} menuName={menuName} description={description} />;

  return <IAMUserContainer list={list} loading={loading} error={error} menuName={menuName} description={description} />;
};

export default IAMUserPage;
