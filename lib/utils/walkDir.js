import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Generic walkdir function that takes a directory path and a callback function as parameters. The callback function is called for each file or directory in the directory path.
 * @param {string} dirPath The directory path to walk.
 * @param {function} callback The callback function to call for each file or directory in the directory path.
 */
export function WalkDir(dirPath, callback) {
	// Get a list of all files and directories in the directory path.
	const dirFiles = readdirSync(dirPath);

	// Iterate over the list of files and directories.
	for (const file of dirFiles) {
		// Get the full path to the file or directory.
		const filePath = join(dirPath, file);

		// Check if the file or directory is a file.
		if (lstatSync(filePath).isFile()) {
			// Call the callback function for the file.
			callback(filePath);
		} else if (lstatSync(filePath).isDirectory()) {
			// Recursively walk the directory.
			WalkDir(filePath, callback);
		}
	}
}
