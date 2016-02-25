import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, State, Navigation } from 'react-router';
//import {connect} from 'react-redux';

import classNames from 'classnames';

export const SidebarNavItem = React.createClass({
	timer: null,
	mixins: [PureRenderMixin ,Navigation, State],
	propTypes: {
		open: React.PropTypes.bool,
		active: React.PropTypes.bool,
		href: React.PropTypes.string,
		autoHeight: React.PropTypes.bool
	},
	getInitialState() {
		return {
			open: this.props.open || false,
			active: this.props.active || false,
			toggleOpen: this.props.open || false,
			dir: 'left',
			opposite: false
		};
	},
	emitOpen(open) {
		var node = ReactDOM.findDOMNode(this.refs.node);
		if(open) {
			//ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
		} else {
			//ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
		}
	},
	handleClick(e) {
		console.log('x');
		if(!this.props.href) {
			e.preventDefault();
			e.stopPropagation();
		}
		if(this.props.hasOwnProperty('onClick')) {
			this.props.onClick();
		}
		this.emitOpen();
	},
	collapse(node, cb) {
		this.setState({
			toggleOpen: false
		}, () => {
			var height = $(node).height();
			$(node).css('height', height).animate({
				height: '45px'
			}, 125, 'easeInOutSine', () => {
				$(node).css('height', '');
				try {
					this.setState({
						open: false,
						toggleOpen: false
					}, () => {
						if(cb) cb();
					});
				} catch(e) {}
			});
		});
	},
	expand(node, cb, disableAnimation) {
		if(disableAnimation) {
			$(node).css('height', '').addClass('open');
		} else {
			this.setState({
				toggleOpen: true
			}, () => {
				var height = $(node).addClass('open').height();
				$(node).removeClass('open');
				$(node).css('height', '45px').animate({
					height: height
				}, 125, 'easeInOutSine', () => {
					$(node).css('height', '');
					try {
						this.setState({
							open: true
						}, () => {
							if(cb) cb();
						});
					} catch(e) {}
				});
			});
		}
	},
	handleOpenState(child_node, open) {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			if(this.props.children && this.isMounted()) {
				var node = React.findDOMNode(this.refs.node);
				if(open) {
					if($(node).find(child_node).length) {
						this.setState({
							open: true,
							toggleOpen: true
						});
						this.expand(node, () => {
							//ReactBootstrap.Dispatcher.emit('sidebar:update');
						}, true);
					}
					return;
				}
				if($(node).is(child_node)) {
					if(this.state.open) {
						this.collapse(node, () => {
							//ReactBootstrap.Dispatcher.emit('sidebar:update');
						});
					} else {
						this.expand(node, () => {
							//ReactBootstrap.Dispatcher.emit('sidebar:update');
						});
					}
					return;
				}
				if(!($(node).find(child_node).length)) {
					if(this.state.open)
						this.collapse(node);
				}
			}
		}, 15);
	},
	handleLayoutDirChange(dir) {
		this.setState({
			dir: dir === 'ltr' ? 'left' : 'right',
			opposite: dir === 'ltr' ? false : true
		});
	},
	componentWillUnmount() {
		//ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
		//ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
	},
	componentWillMount() {
		//ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
		//ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
	},
	activateNavItem(props) {
		var active = props.active || false;
		//var currentLocation = this.context.router.state.location.pathname;
		var currentLocation = '';

		if(!active && props.href) {
			//active = this.isActive(props.href) && (currentLocation == props.href);
			active = false;
		}

		if(active) {
			this.emitOpen(true);
			setTimeout(() => {
				this.setState({active: true});
				var node = ReactDOM.findDOMNode(this.refs.node);
				var height = $(node).height();
				var top = $(node).offset().top;
				//ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
			}, 15);
		} else {
			this.setState({active: false});
		}
	},
	componentWillReceiveProps(nextProps) {
		this.activateNavItem(nextProps);
	},
	componentDidMount() {
		this.activateNavItem(this.props);
	},
	render() {
		var classes = classNames({
			'open': this.state.open,
			'active': this.state.active
		}, this.props.className);
		var toggleClasses = classNames({
			'toggle-button': true,
			'open': this.state.toggleOpen,
			'opposite': this.state.opposite,

			'rubix-icon': true,
			'fontello': true,
			'icon-fontello-left-open-3': true,
			'fa': true,
			'fa-chevron-left': true
		});
		var icon=null, toggleButton = null;
		if(this.props.children) {
			//toggleButton = <Icon className={toggleClasses.trim()} bundle='fontello' glyph={this.state.dir+'-open-3'} />;
			toggleButton = <span className={toggleClasses.trim()} bundle='fontello' glyph={this.props.icon+'-open-3'} />;
		}
		if(this.props.icon || this.props.bundle) {
			//icon = <Icon bundle={this.props.bundle} glyph={this.props.glyph} />;
			//icon = <span bundle={this.props.bundle} glyph={this.props.glyph} />;
			var iconClassnames = classNames({
				'fa': true,
				['fa-'+this.props.icon]: true
			});
			icon = <span bundle={this.props.bundle} className={iconClassnames} />;
		}
		var style = {height: this.props.autoHeight ? 'auto' : ''};

		var props = {
			name: null,
			style: style,
			tabIndex: '-1',
			...this.props,
			className: classes.trim()
		};

		var RouteLink = 'a';
		var componentProps = {
			name: null,
			tabIndex: -1,
			href: this.props.href || '',
			onClick: this.handleClick,
			style: style
		};

		if(this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
			RouteLink = Link;
			componentProps.to = this.props.href;
			delete componentProps.href;
		}

		return (
			<li ref='node' {...props}>
				<RouteLink {...componentProps}>
					{icon}
					<span className='name'>{this.props.name}</span>
					{toggleButton}
				</RouteLink>
				{this.props.children}
			</li>
		);
	}
});
