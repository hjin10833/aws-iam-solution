import React from "react";
import ReactDOM from "react-dom/client";

// import "@/app/styles/index.css";
// import "@/app/styles/App.css";
import "vite/modulepreload-polyfill";

import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
