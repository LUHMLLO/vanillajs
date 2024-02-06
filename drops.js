/**
 * @description Functional lib for making dropdown components.
 */
class Drops {
	/**
	 * @param {Element[]} drops
	 * @returns {Array<Element>}
	 */
	getDrops(drops = [...document.querySelectorAll('dropdown')]) {
		return drops;
	}

	/**
	 * @description Initializes the drops components.
	 * @param {Element[]} drops
	 */
	init(drops = this.getDrops()) {
		if (!drops?.length) {
			return console.warn('no dropdown component found');
		}

		drops?.forEach((drop) => {
			const toggle = drop?.querySelector('toggle');
			if (!toggle) {
				return console.warn('unable to find toggle inside dropdown');
			}

			toggle?.addEventListener('click', (/** @type {Event}*/ e) => {
				e.preventDefault();
				this.toggle(drop);
			});
		});
	}

	/**
	 * @description Toggles the visibility of a dropdown component.
	 * @param {Element} dropdown - The dropdown component to toggle.
	 */
	toggle(dropdown) {
		if (!dropdown) {
			return console.warn('unable to find dropdown');
		}

		document.addEventListener('click', (e) => {
			this.listenClicksOutside(e); // Pass the event as a parameter
		});

		/** @type {HTMLDialogElement | null} dropmenu*/
		const dropmenu = dropdown?.querySelector('[data-role=dropmenu]');
		if (!dropmenu) {
			return console.warn('unable to find dropmenu inside dropdown');
		}

		this.toggleAdjacents(dropdown);

		dropmenu?.hasAttribute('open') ? dropmenu?.close() : dropmenu?.show();
		!dropmenu?.hasAttribute('open') &&
			document.removeEventListener('click', this.listenClicksOutside);
	}

	/**
	 * @description Closes other open dropdowns when a dropdown is toggled.
	 * @param {Element} dropdown - The dropdown component that was toggled.
	 */
	toggleAdjacents(dropdown) {
		this.getDrops().forEach((drop) => {
			/** @type {HTMLDialogElement | null} dmenu*/
			let dropmenu = drop?.querySelector('[data-role=dropmenu]');
			if (!dropmenu) {
				return console.warn('unable to find dropmenu inside dropdown');
			}
			dropdown != drop && dropmenu?.close();
		});
	}

	/**
	 * @description Listens for clicks outside of active drop and closes it.
	 * @param {MouseEvent} e
	 */
	listenClicksOutside(e) {
		this.getDrops().forEach((dropdown) => {
			/** @type {HTMLDialogElement | null} dropmenu*/
			const dropmenu = dropdown?.querySelector('[data-role=dropmenu]');
			if (!dropmenu) {
				return console.warn('unable to find dropmenu inside dropdown');
			}
			!dropdown.contains(/** @type {Node}*/(e.target)) &&
				dropmenu?.close();
		});
	}
}