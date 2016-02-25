import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { FETCH_FAILED, FETCH_ENTITY, REQUEST_ENTITY, RECEIVE_ENTITY, TOGGLE_NAVIGATION } from '../actions';
import { FETCH_DESCRIPTIONS, REQUEST_DESCRIPTIONS, RECEIVE_DESCRIPTIONS } from '../actions/descriptions';

export const INITIAL_STATE_DESCRIPTIONS = Immutable.fromJS({
	fetching: false,
	list: []
});

export const INITIAL_STATE_DATA = Immutable.fromJS({
	active: false,
	fetching: false,
	records: [],
	error: false
});

export const INITIAL_STATE_UI = Immutable.fromJS({
	visibleSidebar: false,
	collapsedSidebarItems: [],
	activeSidebarItem: null,

	sort: false,
	sortDirection: false,

	filter: {fieldName: 'value', fieldname2: 'value'},

	page: false,
	itemsPerPage: false,

	activeTab: false,
});

function data(state = INITIAL_STATE_DATA, action) {
	switch (action.type) {
		case FETCH_FAILED:
			return state.merge({
				fetching: false,
				records: Immutable.List(),
				error: action.message
			});
		case FETCH_ENTITY:
			return state.merge({
				fetching: true,
				active: action.name
			});
		case REQUEST_ENTITY:
			return state;
		case RECEIVE_ENTITY:
			return state.merge({
				records: Immutable.List(action.records),
				fetching: false
			});
		default:
			return state;
	}
}

function descriptions(state = INITIAL_STATE_DESCRIPTIONS, action) {
	switch (action.type) {
		case FETCH_DESCRIPTIONS:
			return state.merge({
				fetching: true
			});
		case REQUEST_DESCRIPTIONS:
			return state.merge({
				fetching: true
			});
		case RECEIVE_DESCRIPTIONS:
			return state.merge({
				list: Immutable.OrderedMap(action.entities),
				fetching: false
			});
		default:
			return state;
	}
}

function ui(state = INITIAL_STATE_UI, action) {
	switch (action.type) {
		case TOGGLE_NAVIGATION:
			return state.merge({
				visibleSidebar: !state.get('visibleSidebar')
			});
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	data: data,
	descriptions: descriptions,
	ui: ui
})

export default rootReducer;
