/**
 * @description A library for creating and managing dropdown components.
 * @class
 */
class Drops {
	/**
	 * @description Gets an array of dropdown elements.
	 * @param {NodeListOf<Element>} [drops=document.querySelectorAll('dropdown')] - The dropdown elements.
	 * @returns {Element[]} An array of dropdown elements.
	 */
	getDrops(drops = document.querySelectorAll("dropdown")) {
		return [...drops];
	}

	/**
	 * @description Initializes dropdown components.
	 * @param {Element[]} [drops=this.getDrops()] - The dropdown elements to initialize.
	 */
	init(drops = this.getDrops()) {
		if (!drops.length) {
			console.warn("Drops: No dropdown component found.");
			return;
		}

		drops.forEach((drop) => {
			if (drop.hasAttribute('disabled')) {
				return;
			}

			const toggle = drop.querySelector("toggle");
			if (!toggle) {
				console.warn("Drops: Unable to find toggle inside dropdown.");
				return;
			}

			toggle.addEventListener("click", (event) => {
				event.preventDefault();
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
			console.warn("Drops: Unable to find dropdown.");
			return;
		}

		document.addEventListener("click", this.listenClicksOutside);

		/** @type {HTMLDialogElement | null} dropmenu*/
		const dropmenu = dropdown.querySelector("[data-role=dropmenu]");
		if (!dropmenu) {
			console.warn("Drops: Unable to find dropmenu inside dropdown.");
			return;
		}

		this.toggleAdjacents(dropdown);

		if (dropmenu.hasAttribute("open")) {
			dropmenu.close();
		} else {
			dropmenu.show();
		}

		!dropmenu.hasAttribute("open") &&
			document.removeEventListener("click", this.listenClicksOutside);
	}

	/**
	 * @description Closes other open dropdowns when a dropdown is toggled.
	 * @param {Element} dropdown - The dropdown component that was toggled.
	 */
	toggleAdjacents(dropdown) {
		this.getDrops().forEach((drop) => {
			/** @type {HTMLDialogElement | null} dropmenu*/
			const dropmenu = drop.querySelector("[data-role=dropmenu]");
			if (dropdown !== drop && dropmenu) {
				dropmenu.close();
			}
		});
	}

	/**
	 * @description Listens for clicks outside of active drops and closes them.
	 * @param {MouseEvent} event - The click event.
	 */
	listenClicksOutside = (event) => {
		this.getDrops().forEach((dropdown) => {
			/** @type {HTMLDialogElement | null} dropmenu*/
			const dropmenu = dropdown.querySelector("[data-role=dropmenu]");
			if (
				dropmenu &&
				event.target instanceof Node &&
				!dropdown.contains(event.target)
			) {
				dropmenu.close();
			}
		});
	};
}