import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import NavContainer from './NavContainer';
import {SidebarContainer} from '../modules/Sidebar/Sidebar';
import {ContentContainer} from './Content';

export const SeedApp = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return <div className="Wrapper">
			<div id="app-container">
				<div id="container" className={this.props.visibleSidebar ? 'container-open' : ''}>
					<SidebarContainer />
					<NavContainer/>
					<div id="body" className="">
						<div className="rubix-grid container-fluid" style={{zIndex:9999984}}>
							<div className="row">
								<ContentContainer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
});

//SeedApp.propTypes = {
//	options: PropTypes.arrayOf(
//		PropTypes.string.isRequired
//	).isRequired,
//	value: PropTypes.string.isRequired,
//	onChange: PropTypes.func.isRequired
//}

function mapStateToProps(state) {
	return {
		//list: state.getIn(['entities', 'list']),
		//fetching: state.getIn(['entities', 'fetching']),
		visibleSidebar: state.getIn(['ui', 'visibleSidebar']),
	}
}
export const SeedAppContainer = connect(
	mapStateToProps,
	actionCreators
)(SeedApp);
