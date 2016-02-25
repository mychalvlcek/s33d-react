import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Grid} from '../modules/Grid/Grid';
import {Map} from 'immutable';

const Content = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return (
			<div className="col-sm-12">
				<hr/>
				<Grid {...this.props} />
			</div>
		);
	}
});

function mapStateToProps(state) {
	const active = state.getIn(['data', 'active'], false);
	const description = state.getIn(['descriptions', 'list', active], Map());
	return {
		fetching: state.getIn(['data', 'fetching']),
		active: active,
		description: description,
		records: state.getIn(['data', 'records']),
		error: state.getIn(['data', 'error']),
	}
}
export const ContentContainer = connect(
	mapStateToProps
)(Content);
