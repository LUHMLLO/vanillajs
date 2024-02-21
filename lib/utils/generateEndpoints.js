/**
 * Converts array of pages to JavaScript import statements.
 *
 * @param {EndpointsList} endpoints - The pages to convert.
 * @returns {Promise<String>} The JavaScript import statements.
 */
export async function GenerateEndpoints(endpoints) {
	let js = '';
	let exports = 'export default [\n';

	endpoints.forEach((end) => {
		const importName = end.import.replace(/[^a-zA-Z0-9]/g, '_');
		js += `import * as ${importName} from '${end.import}';\n`;
		exports += `\t{\n\t\tpath: '${end.path}',\n\t\timport: ${importName},\n\t},\n`;
	});

	exports += '];\n';

	return js + exports;
}
