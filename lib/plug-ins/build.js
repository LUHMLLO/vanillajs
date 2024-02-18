import { promises as fs } from 'fs';
import path from 'path';
import { build } from 'vite';

export default async function lmPlugins() {
	if (process.env.NODE_ENV !== 'production') {
		const dir = path.resolve('../../', './lib/plug-ins');
		const outputDir = path.resolve('../../', './static/assets/js');

		// Create directories if they don't exist
		// await fs.mkdir(dir, { recursive: true });
		// await fs.mkdir(outputDir, { recursive: true });

		console.log(dir);
		// Find all .js files in the directory
		const files = (await fs.readdir(dir)).filter(
			(file) => path.extname(file) === '.js'
		);
		console.log(files);

		for (const file of files) {
			// Build the file
			const result = await build({
				root: dir,
				build: {
					outDir: outputDir,
					rollupOptions: {
						input: path.join(dir, file),
					},
				},
			});

			// Write the result to the output file
			const outputFile = path.join(outputDir, file);
			// @ts-ignore
			await fs.writeFile(outputFile, result.code);
		}
	}
}

lmPlugins();
