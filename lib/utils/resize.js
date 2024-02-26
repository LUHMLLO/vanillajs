/**
 * @description A library for creating and managing resizable components.
 * @class
 */
export default class Resize {
	constructor() {
		/** @type {NodeListOf<Element>} */
		this.resItems = document.querySelectorAll('[resizable]');
	}

	init() {
		this.resItems.forEach((/**@type {Element} */ target) => {
			// @ts-ignore
			target.addEventListener('mousedown', (/**@type {MouseEvent} */ e) => {
				const initialWidth = target.clientWidth;
				const initialX = e.clientX;

				const mousemoveHandler = (/** @type {{ clientX: number; }} */ e) => {
					const newWidth = initialWidth + (e.clientX - initialX);
					// @ts-ignore
					target.style.width = `${newWidth}px`;
				};

				const mouseupHandler = () => {
					window.removeEventListener('mousemove', mousemoveHandler);
					window.removeEventListener('mouseup', mouseupHandler);
				};

				window.addEventListener('mousemove', mousemoveHandler);
				window.addEventListener('mouseup', mouseupHandler);
			});
		});
	}
}
