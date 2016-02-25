import { take, put, call, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions';
import * as descActions from '../actions/descriptions';

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		var error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

export function* fetchEntity(action) {
	yield put(actions.requestEntity());
	try {
		const data = yield call(fetchEntityApi, action.name);
		yield put(actions.receiveEntity(data));
	} catch(error) {
		yield put(actions.fetchFailed(error));
	}
}

export function fetchEntityApi(entity) {
	return fetch(`http://seed.dev/api/entities/${entity}?limit=10`)
		.then(checkStatus)
		.then(response => response.json())
		.catch(err => {
			throw err;
		});
}

export function* saga(getState) {
	yield* takeLatest(actions.FETCH_ENTITY, fetchEntity);
}

// ---

export function* startup(getState) {
	yield* takeLatest(descActions.FETCH_DESCRIPTIONS, fetchDescriptions);
}

export function fetchDescriptionsApi() {
	return fetch('http://seed.dev/api/entities')
		.then(response => response.json())
		.catch(err => {
			throw err;
		});
}

export function* fetchDescriptions() {
	yield put(descActions.requestDescriptions());
	try {
		const json = yield call(fetchDescriptionsApi);
		//const entities = json.map(child => child);
		var entities = {};
		json.forEach(child => {
			entities[child.name] = child;
		});
		//const entities = json.map(child => child.label);
		yield put(descActions.receiveDescriptions(entities));
	} catch(error) {
		yield put(actions.fetchFailed(error));
	}
}

// ---

export default function* root(getState) {
	yield fork(fetchDescriptions, getState);
	yield fork(saga, getState);
	//yield fork(nextRedditChange, getState);
	//yield fork(invalidateReddit, getState);
}
