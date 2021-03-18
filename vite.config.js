import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  alias: { "@": path.resolve(__dirname, "./src") },
  plugins: [vue()],
});
