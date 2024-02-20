/**
 * @description Inspect, console and debugg application processes
 * @param {string} module
 * @param {string} source
 * @param {string} target
 * @param {string} type
 * @param {unknown} x
 */
export default function Inspect(
	module = '',
	source = '',
	target = '',
	type = '',
	x
) {
	console.group(`Inspecting ${module}`);
	console.debug({
		source,
		target,
		type,
		x,
	});
	console.groupEnd();
}
