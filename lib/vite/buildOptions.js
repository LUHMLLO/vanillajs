const buildOptions = {
	cssCodeSplit: true,
	emptyOutDir: true,
	minify: 'terser',
	minifyES: true,
	sourcemap: false,
	target: 'ESNEXT',
	terserOptions: {
		safari10: true,
		ie8: true,
		compress: true,
		mangle: true,
		module: true,
	},
};

export default buildOptions;
