import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

import css from './SidebarControls.less';

export const SidebarControlBtn = React.createClass({
	mixins: [PureRenderMixin],
	getDefaultProps() {
		return {
			iconset: 'fa',
		};
	},
	//getInitialState() {
	//	return {
	//		iconset: this.props.iconset || 'fa',
	//	};
	//},
	handleClick(e) {
		e.preventDefault();
		e.stopPropagation();
		//ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
		//ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	},
	handleState(props) {
		if (props.hasOwnProperty('sidebar')) {
			if (props.sidebar === this.props.sidebar) {
				this.setState({active: true});
			} else {
				this.setState({active: false});
			}
		}
	},
	componentDidMount() {
		//ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
		//var scrollToTop = () => {
		//	if($(window).scrollTop() === 0) return;
		//	setTimeout(() => {
		//		$('html, body, #body').scrollTop(0);
		//		$(window).scrollTop(0);
		//		scrollToTop();
		//	}, 15);
		//};
		//
		//scrollToTop();
	},
	componentWillUnmount() {
		//ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
	},
	render() {
		var classes = classNames('sidebar-control-btn', {
			//'active': this.state.active
		}, this.props.className);

		var props = {
			onClick: this.handleClick,
			...this.props,
			className: classes.trim()
		};
		var iconClasses = classNames({
			[this.props.iconset]: true,
			[this.props.iconset + '-' + this.props.icon]: true
		});
		return (
			<li {...props}>
				<a href='#'>
					<span className={iconClasses}></span>
				</a>
			</li>
		);
	}
});

SidebarControlBtn.propTypes = {
	iconset: PropTypes.string,
	icon: PropTypes.string.isRequired
}
