import { defineConfig } from "vite";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { buildOptions } from "./build.options";

// vite.config.js
export default defineConfig({
    plugins: [eslintPlugin()],
    // @ts-ignore
    build: {
        lib: {
            entry: './packages/pager',
            name: 'min-router',
            fileName: 'index',
        },
        outDir: "dist/pager",
        ...buildOptions,
    },
    esbuild: {
        drop: ["console", "debugger"],
    },
});