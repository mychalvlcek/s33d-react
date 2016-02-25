import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//import {connect} from 'react-redux';

import classNames from 'classnames';
import css from './SidebarControls.less';

export const SidebarControls = React.createClass({
	mixins: [PureRenderMixin],
	render() {
		var classes = classNames('sidebar-controls-container',
			this.props.className);
		var props = {
			dir: 'ltr',
			...this.props,
			className: classes
		};

		return (
			<div {...props} children={null}>
				<div className="sidebar-controls" tabIndex='-1'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

//SidebarControls.propTypes = {
//	options: PropTypes.arrayOf(
//		PropTypes.string.isRequired
//	).isRequired,
//	value: PropTypes.string.isRequired,
//	onChange: PropTypes.func.isRequired
//}

//function mapStateToProps(state) {
//	return {
//		list: state.getIn(['descriptions', 'list']),
//		fetching: state.getIn(['descriptions', 'fetching']),
//		active: state.getIn(['data', 'active'], false)
//	}
//}
