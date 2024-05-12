import { createElement, lazy, ReactElement } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

// Configs
import pageUrlConfig from "./pageUrl.config";
// layouts
import { MainLayout } from "@/components";
// Pages
const LazyHomePage = lazy(() => import("@/pages/views/home/index.view"));

export type Routers = RouteObject[];

const DefaultLayoutComponent = (): ReactElement => createElement(MainLayout);
const HomeComponent = (): ReactElement => createElement(LazyHomePage);

const createRoutes = (): Routers => {
  const routes: Routers = [
    {
      path: pageUrlConfig.home,
      element: DefaultLayoutComponent(), // Use function to create React element
      children: [
        { path: pageUrlConfig.default, element: HomeComponent() }, // Main Page
        // { path: pageUrlConfig.test, element: TestComponent() }, // Test Page
      ],
    },
  ];

  return routes;
};

export default createBrowserRouter(createRoutes());
