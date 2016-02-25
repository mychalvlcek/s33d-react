require("babel-polyfill");

import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import { put, call } from 'redux-saga/effects';

//import rootSaga from '../../src/sagas';

import { FETCH_FAILED, FETCH_ENTITY, REQUEST_ENTITY, RECEIVE_ENTITY } from '../../src/actions';
import { FETCH_DESCRIPTIONS, REQUEST_DESCRIPTIONS, RECEIVE_DESCRIPTIONS } from '../../src/actions/descriptions';

//test('incrementAsync Saga test', (t) => {
//	const generator = incrementAsync()
//
//	t.deepEqual(
//		generator.next().value,
//		call(delay, 1000),
//		'counter Saga must call delay(1000)'
//	)
//
//	t.deepEqual(
//		generator.next().value,
//		put({type: 'INCREMENT'}),
//		'counter Saga must dispatch an INCREMENT action'
//	)
//
//	t.deepEqual(
//		generator.next(),
//		{ done: true, value: undefined },
//		'counter Saga must be done'
//	)
//
//	t.end()
//});

//export function* fetchDescriptions() {
//	yield put(descActions.requestDescriptions());
//	try {
//		const json = yield call(fetchDescriptionsApi);
//		const entities = json.map(child => child);
//		//const entities = json.map(child => child.label);
//		yield put(descActions.receiveDescriptions(entities));
//	} catch(error) {
//		yield put(actions.fetchFailed(error));
//	}
//}

describe('saga', () => {
	it('fetchDescriptions*', () => {
		//const generator = fetchDescriptions();
		//
		//const myTodos = [{ message: 'text', done: false }];
		//generator.next();
		//expect(generator.next().value).to.equal(put({ type: 'FETCHING_TODOS' }));
		//expect(generator.next().value).toEqual(call(fetch, '/todos'));
		//expect(generator.next(myTodos).value).toEqual(put({ type: 'FETCHED_TODOS', payload: myTodos }));
	});
});
