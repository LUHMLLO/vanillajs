import { defineConfig } from "vite";
import { buildOptions } from "./build.options";

// vite.config.js
export default defineConfig({
    // @ts-ignore
    build: {
        lib: {
            entry: './packages/pager',
            name: 'pager',
            fileName: 'index',
        },
        outDir: "dist/pager",
        ...buildOptions,
    },
    esbuild: {
        drop: ["console", "debugger"],
    },
});