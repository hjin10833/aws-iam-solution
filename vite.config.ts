import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  envPrefix: "VITE_ENV",
  resolve: {},
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            console.log("빌드", id);
            return `vendor`;
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
    proxy: {
      // "/api": {
      //   target: "https://udftcendvg.execute-api.us-east-2.amazonaws.com",
      //   changeOrigin: true,
      // },
    },
  },
});
