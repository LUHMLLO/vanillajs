import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: 'terser',
        outDir: 'dist',
        target: ['ESNext'],
        terserOptions: {
            safari10: true,
            ie8: true,
            compress: true,
            mangle: true,
            module: true,
        },
    },
    esbuild: {
        drop: ['console', 'debugger'],
    },
});