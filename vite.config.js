import { defineConfig } from "vite";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { buildOptions } from "./build.options";

export default defineConfig({
  plugins: [eslintPlugin()],
  build: {
    outDir: "dist/codepens",
    ...buildOptions,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});