export const FETCH_DESCRIPTIONS = 'FETCH_DESCRIPTIONS';
export const REQUEST_DESCRIPTIONS = 'REQUEST_DESCRIPTIONS';
export const RECEIVE_DESCRIPTIONS = 'RECEIVE_DESCRIPTIONS';

export function fetchDescriptions() {
	return {
		type: FETCH_DESCRIPTIONS
	}
}

export function requestDescriptions() {
	return {
		type: REQUEST_DESCRIPTIONS
	}
}

export function receiveDescriptions(descriptions) {
	return {
		type: RECEIVE_DESCRIPTIONS,
		entities: descriptions
	}
}
