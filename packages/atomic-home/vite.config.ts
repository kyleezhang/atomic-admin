import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      styles: path.resolve(__dirname, "src/styles"),
      views: path.resolve(__dirname, "src/views"),
      comps: path.resolve(__dirname, "src/components"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [vue(), viteMockServe({})],
});
