import React from "react";

/** ============================================================
 *
 *  ============================================================
 */

// Controller
import { useIamUserController } from "@/presentation/controllers";
// Components
import { IAMUserContainer } from "@/components/widgets";
// Shared
import { DEFAULT_DATA } from "@/shared/constants";

const IAMUserPage = () => {
  const { description, menuName, error, list, loading } = useIamUserController();

  // 에러 예외처리
  if (error) return <IAMUserContainer list={[DEFAULT_DATA.USER_DTO]} loading={loading} error={error} menuName={menuName} description={description} />;

  // Response Data 예외처리
  if (list.error) return <IAMUserContainer list={[]} loading={loading} error={error} menuName={menuName} description={description} />;

  // Response Data 예외처리
  if (list.data === null || list.data === false)
    return <IAMUserContainer list={[DEFAULT_DATA.USER_DTO]} loading={loading} error={error} menuName={menuName} description={description} />;

  return <IAMUserContainer list={list} loading={loading} error={error} menuName={menuName} description={description} />;
};

export default IAMUserPage;
