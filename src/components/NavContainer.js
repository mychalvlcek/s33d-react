import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//import Nav from './Nav';
import {Nav} from '../modules/Nav/Nav.jsx';

import { toggleNavigation } from '../actions';

class NavContainer extends Component {
	render() {
		return <Nav {...this.props} />;
	}
}

function mapStateToProps(state) {
	return state.toJS();
	//const {authed, entities, environment, navigator} = state;

	return {
		//authed,
		//authedPlaylists: entities.playlists,
		//isMobile: environment.isMobile,
		//navigator,
		//songs: entities.songs
	};
}

export default connect(mapStateToProps, {toggleNavigation})(NavContainer);
