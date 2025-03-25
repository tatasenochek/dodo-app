export function loadState<T>(key: string): T | undefined {
	try {
		const state = localStorage.getItem(key);
		if (!state || typeof state !== "string") {
			return undefined;
		}
		return JSON.parse(state);
	} catch (e) {
		console.error(`Не удалось распарсить данные для ключа ${key}:`, e);
		return undefined;
	}
}

export function saveState<T>(state: T, key: string) {
	const stringState = JSON.stringify(state);
	localStorage.setItem(key, stringState);
}
