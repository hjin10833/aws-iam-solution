import { RouterProvider as Provider } from "react-router-dom";
import routerConfig from "@/app/configs/router.config";

const RouterProviders = () => <Provider router={routerConfig} />;

export default RouterProviders;
