import reactSwc from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactSwc()],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
