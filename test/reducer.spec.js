import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import rootReducer from '../src/reducers';

import { FETCH_FAILED, FETCH_ENTITY, REQUEST_ENTITY, RECEIVE_ENTITY } from '../src/actions';
import { FETCH_DESCRIPTIONS, REQUEST_DESCRIPTIONS, RECEIVE_DESCRIPTIONS } from '../src/actions/descriptions';

describe('reducer', () => {
	it('handles FETCH_DESCRIPTIONS', () => {
		const initialState = Map();
		const action = {
			type: FETCH_DESCRIPTIONS,
			state: Map({
				descriptions: Map({
					list: List.of(),
					fetching: true
				})
			})
		};

		const nextState = rootReducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			data: {
				fetching: false,
				records: []
			},
			descriptions: {
				list: [],
				fetching: true
			}
		}));
	});
	//
	//it('handles SET_STATE', () => {
	//	const initialState = Map();
	//	const action = {
	//		type: 'SET_STATE',
	//		state: Map({
	//			vote: Map({
	//				pair: List.of('Trainspotting', '28 Days Later'),
	//				tally: Map({Trainspotting: 1})
	//			})
	//		})
	//	};
	//	const nextState = reducer(initialState, action);
	//
	//	expect(nextState).to.equal(fromJS({
	//		vote: {
	//			pair: ['Trainspotting', '28 Days Later'],
	//			tally: {Trainspotting: 1}
	//		}
	//	}));
	//});
	//
	//it('handles SET_STATE with plain JS payload', () => {
	//	const initialState = Map();
	//	const action = {
	//		type: 'SET_STATE',
	//		state: {
	//			vote: {
	//				pair: ['Trainspotting', '28 Days Later'],
	//				tally: {Trainspotting: 1}
	//			}
	//		}
	//	};
	//	const nextState = reducer(initialState, action);
	//
	//	expect(nextState).to.equal(fromJS({
	//		vote: {
	//			pair: ['Trainspotting', '28 Days Later'],
	//			tally: {Trainspotting: 1}
	//		}
	//	}));
	//});
	//
	//it('handles SET_STATE without initial state', () => {
	//	const action = {
	//		type: 'SET_STATE',
	//		state: {
	//			vote: {
	//				pair: ['Trainspotting', '28 Days Later'],
	//				tally: {Trainspotting: 1}
	//			}
	//		}
	//	};
	//	const nextState = reducer(undefined, action);
	//
	//	expect(nextState).to.equal(fromJS({
	//		vote: {
	//			pair: ['Trainspotting', '28 Days Later'],
	//			tally: {Trainspotting: 1}
	//		}
	//	}));
	//});
});
