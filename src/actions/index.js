export const FETCH_FAILED = 'FETCH_FAILED';

export const FETCH_ENTITY = 'FETCH_ENTITY';
export const REQUEST_ENTITY = 'REQUEST_ENTITY';
export const RECEIVE_ENTITY = 'RECEIVE_ENTITY';

export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function fetchFailed(message = 'err') {
	return {
		type: FETCH_FAILED,
		message: message
	}
}

// ---

export function fetchEntity(name = 'clinics') {
	return {
		type: FETCH_ENTITY,
		name: name
	}
}

export function requestEntity() {
	return {
		type: REQUEST_ENTITY
	}
}

export function receiveEntity(records) {
	return {
		type: RECEIVE_ENTITY,
		records: records
	}
}

export function toggleNavigation() {
	return {
		type: TOGGLE_NAVIGATION
	}
}

// ---

import * as _des from './descriptions';
export const descriptions = _des;
