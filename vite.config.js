import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ezenseSite15/",
  resolve: {
    alias: {
      assets: resolve(__dirname, "src/assets"),
      context: resolve(__dirname, "src/context/"),
      components: resolve(__dirname, "src/components"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
});
