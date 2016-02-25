import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actions from '../actions';
import NavContainer from './NavContainer';

export const Results = React.createClass({
	mixins: [PureRenderMixin],
	getPair: function () {
		return this.props.pair || [];
	},
	getVotes: function (entry) {
		if (this.props.tally && this.props.tally.has(entry)) {
			return this.props.tally.get(entry);
		}
		return 0;
	},
	render: function () {
		return <div className="results">
			<NavContainer/>
			<div className="tally">
				{this.getPair().map(entry =>
					<div key={entry} className="entry">
						<h1>{entry}</h1>
						<div className="voteCount">
							{this.getVotes(entry)}
						</div>
					</div>
				)}
			</div>
			<div className="management">
				<button
					ref="next"
					className="next"
					onClick={this.props.next}>
					Next
				</button>
			</div>
		</div>;
	}
});

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		tally: state.getIn(['vote', 'tally']),
		winner: state.get('winner')
	}
}
export const ResultsContainer = connect(
	mapStateToProps,
	null
	//actionCreators
)(Results);
