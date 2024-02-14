export const buildOptions = {
    minify: `terser`,
    target: ["ESNext"],
    terserOptions: {
        safari10: true,
        ie8: true,
        compress: true,
        mangle: true,
        module: true,
        output: {
            beautify: false,
        },
    }
  }