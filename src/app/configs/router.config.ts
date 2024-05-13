import React, { createElement, lazy, ReactElement } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

// Configs
import pageUrlConfig from "./pageUrl.config";
// layouts
import LayoutContainer from "@/components/widgets/containers/layout-container";
import IAMUserPage from "@/presentation/pages/iam/user-page";
import HomePage from "@/presentation/pages/home/index-page";
// Pages
const LazyHomePage = lazy(() => import("@/presentation/pages/home/index-page"));
const LazySignInPage = lazy(() => import("@/presentation/pages/auth/sign-in-page"));
const LazySignUpPage = lazy(() => import("@/presentation/pages/auth/sign-up-page"));

const LazyUserPage = lazy(() => import("@/presentation/pages/iam/user-page"));
const LazyGroupPage = lazy(() => import("@/presentation/pages/iam/group-page"));

export type Routers = RouteObject[];

const LayoutComponent = (): ReactElement => createElement(LayoutContainer);
const HomeComponent = (): ReactElement => createElement(LazyHomePage);

const SignInComponent = (): ReactElement => createElement(LazySignInPage);
const SignUpComponent = (): ReactElement => createElement(LazySignUpPage);

const UserComponent = (): ReactElement => createElement(IAMUserPage);
const GroupComponent = (): ReactElement => createElement(LazyGroupPage);

const routes: Routers = [
  {
    path: pageUrlConfig.home,
    element: LayoutComponent(), // Use function to create React element
    children: [
      { path: pageUrlConfig.default, element: HomeComponent() }, // Main Page
      { path: `${pageUrlConfig.iam}${pageUrlConfig.user}/:menuId`, element: UserComponent() }, // 유저
      { path: `${pageUrlConfig.iam}${pageUrlConfig.group}`, element: GroupComponent() }, // 그룹
    ],
  },
];

export default createBrowserRouter(routes);
