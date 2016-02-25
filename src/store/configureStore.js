import { createStore, applyMiddleware, compose } from 'redux';

import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import DevTools from '../containers/DevTools';
import {Map} from 'immutable';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export const INITIAL_STATE = Map();

export default function configureStore(initialState = INITIAL_STATE) {
	const logger = createLogger({collapsed: true});

	const enhancer = compose(
		// Middleware you want to use in development:
		applyMiddleware(
			createSagaMiddleware(rootSaga),
			logger
		),
		// Required! Enable Redux DevTools with the monitors you chose
		DevTools.instrument()
	);

	const store = createStore(rootReducer, initialState, enhancer);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			store.replaceReducer(require('../reducers'));
		})
	}

	return store;
}
