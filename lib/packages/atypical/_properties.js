// const schemes = {
// 	dark: {
// 		accent: 'hsl(124, 69%, 40%)',
// 		context: 'hsl(169, 69%, 40%)',

// 		background: 'hsl(0, 0%, 4%)',
// 		text: 'hsl(0, 0%, 96%)',
// 		subtext: 'hsl(0, 0%, 72%)',

// 		primary: 'hsl(0, 0%, 8%)',
// 		secondary: 'hsl(0, 0%, 12%)',
// 		tertiary: 'hsl(0, 0%, 16%)',
// 	},
// 	light: {
// 		accent: 'hsl(124, 69%, 64%)',
// 		context: 'hsl(169, 69%, 64%)',

// 		background: 'color-mix(in srgb, var(--clr-accent), #fbfbfe 96%)',
// 		text: 'color-mix(in srgb, var(--clr-background), black 88%)',
// 		subtext: 'color-mix(in srgb, var(--clr-background), var(--clr-text) 56%)',

// 		primary: 'color-mix(in srgb, var(--clr-background), hsl(108, 6%, 75%) 12%)',
// 		secondary: 'color-mix(in srgb, var(--clr-primary), hsl(93, 6%, 72%) 18%)',
// 		tertiary: 'color-mix(in srgb, var(--clr-secondary), hsl(103, 6%, 77%) 32%)',
// 	},
// };

// /**
//  * @param {string} theme
//  */
// function applyThemeProperties(theme) {
// 	// @ts-ignore
// 	const themeColors = schemes[theme];
// 	for (const [key, value] of Object.entries(themeColors)) {
// 		window.CSS.registerProperty({
// 			name: `--clr-${key}`,
// 			syntax: '<color>',
// 			inherits: true,
// 			initialValue: value,
// 		});
// 	}
// }

// function handleProperties() {
// 	const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
// 		.matches
// 		? 'dark'
// 		: 'light';
// 	applyThemeProperties(preferredTheme);

// 	// Listen for changes in the preferred color scheme
// 	window
// 		.matchMedia('(prefers-color-scheme: dark)')
// 		.addEventListener('change', (event) => {
// 			const newTheme = event.matches ? 'dark' : 'light';
// 			applyThemeProperties(newTheme);
// 		});
// }

// handleProperties();
