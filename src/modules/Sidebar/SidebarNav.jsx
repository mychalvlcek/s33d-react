import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//import {connect} from 'react-redux';

import classNames from 'classnames';

import css from './SidebarNav.less';

export const SidebarNav = React.createClass({
	mixins: [PureRenderMixin],
	render() {
		var classes = classNames('sidebar-nav', this.props.className);

		var props = {
			...this.props,
			className: classes
		};

		return (
			<ul {...props} children={null}>
				{this.props.children}
			</ul>
		);
	}
});
