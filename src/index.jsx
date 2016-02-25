import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import configureStore from './store/configureStore';

import {Provider} from 'react-redux';
import DevTools from './containers/DevTools';
import {ResultsContainer} from './components/Results';
import {SeedAppContainer} from './components/SeedApp';
import {App} from './components/App';

const store = configureStore();

const routes = <Route component={App}>
	<Route path="/results" component={ResultsContainer}/>
	<Route path="/" component={SeedAppContainer}/>
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router  history={hashHistory}>{routes}</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('app')
);
