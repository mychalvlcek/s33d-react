import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Immutable from 'immutable';

import css from './Sidebar.less';

import { fetchEntity } from '../../actions';
import { fetchDescriptions } from '../../actions/descriptions';
import Link from '../../components/Link';

import {SidebarControls} from './SidebarControls';
import {SidebarControlBtn} from './SidebarControlBtn';
import {SidebarNav} from './SidebarNav';
import {SidebarNavItem} from './SidebarNavItem';

export const Sidebar = React.createClass({
	mixins: [PureRenderMixin],
	getEntities: function () {
		return this.props.list.valueSeq() || [];
	},
	render: function () {
		return (
			<div id='sidebar' {...this.props}>
				<div id='avatar'>
					<div className="container-fluid" style={{zIndex:9999998}}>
						<div className="row">
							<div className="col-xs-6">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAgCAMAAAAMu1cDAAACLlBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////84zaqNAAAAuXRSTlMAAQIDBAUGCAkKCwwNDg8SExQVFhcYGhscHR8gISIkJSYnKCorLS4vMDEyNDU3ODk6PT4/QERFRklKS1FSU1RXWFpbXF1eX2RmZ2lqbW5xc3R1d3h5ent8fYCCg4WHiYqLjY6PkJGTmJmcnZ6foKGjpKWmp6mrrK2us7S1tre4ubu8vb7AwsPExcbHyMnKy8zOz9LT1NXX2Nna29ze3+Dh4uPk5ebo6err7O3u7/Hy8/T29/j5+vv8/gacjuYAAALYSURBVEjHxdfnUxNRFMbhn2JBMGIv2EXFgh17b1ERC3axdwVLjBUbihUlKoqIWLCABTEaBeH97/xgorDZZHczUe6n857J3Wc2c2d3D9V+i9V4Fkj71LJZnUyclizXcMBnbLri5fut+E2A29j0d/5f/gsg6Vvr+ZnAMf0jPzHJyj8LZMiW375X757tnPkXSi38+hTgiR1/aMGPgL+x4c7qrg78khoLPxvIlg1/oarWTcmYuaVEkxz4Rc+i+2VASr0Nf6SOBKtuCXH0xwLnZMMvCsR0/iz8fCBTdvyaS2HX7jF5VPvIse/ktHZQXBHN/5YEvLTlvys26BPuqiHQkBshzn/VpIbPOzlcFc13A5tlyz+uTi2yW/fmpg7dqALTuEcXZ4wYs6r20IFo/38J0KfJnt+9vmZEszhM+wAYr7UmcbayAWh7X1ei+GlAoez5pFfrwrQ/6WFNsDjfZBI/PgrGwSqK7B8AZsmuD2v8CuxMBaCXlgWbmcoIi0O0OLSnLvLzr7YDJLx34EPmKWk/wGJ1C7Z6an5YdGtAaMetyOd/DrBLjnxIzFUxkKUHd3w+n89387lywuJa/dlcWBnJvw4MllMfZmoHrJT3pMfj8Xi8eVtHh8U16hL69bWI578/cDsGnxs/Yb1atAwxR8mW978NWKBY/B2CORrVvGWISzQoVPqemvtvgY5fYvIvC1za1bxliP20IlR+v2/uTwcOKRa/j44Cp5XUvGmIlR+CxWwVmvoFQLoc+MkTgu+WqU11XYDE2o/pAHQdnxAe03UagGl1ZVfN/MYeQKkTP0Uq9ebnn/igsoG/X2+VuncwN++arrQxifP0NW/D3hK5F70z83OA5XLiM273pcq3b6rOzP17yi6/LH99MctlGrvvflz+9Nxo+i818SsAV8CZH8/v74mAV63me4GJajU/4AIq/p9vvPJyYLv1UBq3+dMwfxcBqXVfrYbyuM3fvwASt0wFh6EMVgAAAABJRU5ErkJggg=="/>
							</div>
						</div>
					</div>
				</div>
				<SidebarControls>
					<SidebarControlBtn icon="refresh" sidebar={0}/>
					<SidebarControlBtn icon="user" sidebar={1}/>
					<SidebarControlBtn icon="th-list" sidebar={2}/>
					<SidebarControlBtn icon="key" sidebar={3}/>
					<SidebarControlBtn icon="sign-out" sidebar={4}/>
				</SidebarControls>
				<div id="sidebar-container">
					<div style={{left: '0%', visibility: 'visible', transition: 'all 0.3s ease'}}
					     className="sidebar ps-container">
						<div>
							<div className="rubix-grid container-fluid" style={{zIndex:9999997}}>
								<div className="row">
									<div className="col-xs-12">
										<div className='sidebar-header'>PAGES</div>
										<div className='sidebar-nav-container'>
											<SidebarNav style={{marginBottom: 0}}>
												<SidebarNavItem icon='envelope' name='Blank' href='/'/>
												<SidebarNavItem icon='envelope'
												                name={<span>Menu <label className="label label-default bg-darkgreen45 fg-white">3</label></span>}>
													<SidebarNav>
														<SidebarNavItem glyph='icon-feather-inbox' name='Inbox'/>
														<SidebarNavItem glyph='icon-outlined-mail-open' name='Mail'/>
														<SidebarNavItem glyph='icon-dripicons-message' name='Compose'/>
													</SidebarNav>
												</SidebarNavItem>
											</SidebarNav>
										</div>
									</div>
								</div>
							</div>
							<hr style={{borderColor:'#3B4648',borderWidth:'2px',marginTop:'15px',marginBottom:0,width:'200px'}}/>
							<div className="rubix-grid container-fluid" style={{zIndex:9999997}}>
								<div className="row">
									<div className="col-xs-12">
										<div
											className="sidebar-header">{this.props.fetching ? 'loading..' : 'entities'}</div>
										<div className="sidebar-nav-container">
											<SidebarNav style={{marginBottom: 0}}>
												{this.getEntities().map(entry =>
													<SidebarNavItem
														key={entry.name}
														className={this.props.active == entry.name ? 'active' : ''}
														icon={entry.icon}
														name={entry.label}
														onClick={() => this.props.fetchEntity(entry.name)}
													/>
												)}
											</SidebarNav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

Sidebar.propTypes = {
	list: PropTypes.object.isRequired,
	collapsedSidebarItems: PropTypes.instanceOf(Immutable.List).isRequired,
	activeSidebarItem: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
	return {
		// route,
		// auth,
		collapsedSidebarItems: state.getIn(['ui', 'collapsedSidebarItems']),
		activeSidebarItem: state.getIn(['ui', 'activeSidebarItem']),
		list: state.getIn(['descriptions', 'list']),
		fetching: state.getIn(['descriptions', 'fetching']),
		active: state.getIn(['data', 'active'], null),
	}
}
export const SidebarContainer = connect(
	mapStateToProps,
	{fetchDescriptions, fetchEntity}
)(Sidebar);
