import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ezenseSite19/",
  resolve: {
    alias: {
      assets: resolve(__dirname, "src/assets"),
      components: resolve(__dirname, "src/components"),
      routes: resolve(__dirname, "src/routes"),
      context: resolve(__dirname, "src/context"),
      hooks: resolve(__dirname, "src/hooks"),
    },
  },
});
