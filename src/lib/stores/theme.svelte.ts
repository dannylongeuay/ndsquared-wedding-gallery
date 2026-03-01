type Theme = 'mocha' | 'latte';

let theme = $state<Theme>('mocha');

export function getTheme(): Theme {
	return theme;
}

export function toggleTheme(): void {
	theme = theme === 'mocha' ? 'latte' : 'mocha';
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}

export function initTheme(): void {
	const stored = localStorage.getItem('theme') as Theme | null;
	if (stored === 'mocha' || stored === 'latte') {
		theme = stored;
	}
	document.documentElement.setAttribute('data-theme', theme);
}
