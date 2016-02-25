import React, {Component, PropTypes} from 'react';

import {Breadcrumb} from './Breadcrumb.jsx';

export const Nav = React.createClass({
	getBreadcrumbItem() {
		var items = [];
		if (this.props.data.active !== false) {
			items.push(this.props.data.active);
		}
		return items;
	},
	render: function () {
		return (
			<div id="navbar" className="rubix-grid container-fluid" style={{zIndex:9999985}} {...this.props}>
				<div className="row">
					<div className="col-xs-12">
						<nav id="rubix-nav-header" className="navbar navbar-fixed-top navbar-light bg-faded" role="navigation" style={{zIndex:9999998}}>
							<div className="container-fluid">
								<div className="row">
									<div className="col-xs-2 col-sm-1 visible-xs-block visible-sm-block">
										<div className="navbar-content">
											<ul className="nav navbar-nav">
												<li data-id="sidebar-btn" className="sidebar-btn">
													<a href="#" onClick={() => this.props.toggleNavigation()}><span className="fa fa-bars"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-xs-7 col-sm-8 col-md-5">
										<Breadcrumb items={this.getBreadcrumbItem()}/>
									</div>
									<div className="col-xs-3 col-sm-3 col-md-7">
										<div className="navbar-content pull-right">
											<ul className="nav navbar-nav hidden-xsx">
												<li className="divider"></li>
												<li className="dropdown">
													<a id="flag-menu-btn" className="dropdown-toggle" href="#" data-toggle="dropdown">
														<img src="http://rubix305.sketchpixy.com/imgs/flags/flags/flat/32/United-States.png" width="32" height="32"/>
													</a>
													<ul role="menu" aria-labelledby="flag-menu"
													    className="dropdown-menu dropdown-menu-right menu-theme double-width"
													    style={{paddingBottom: '0px', display: 'none'}}
													    id="flag-menu">
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);

		//return (
		//	<nav className="navbar navbar-default">
		//		<div className="container-fluid">
		//			<div className="navbar-header">
		//				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
		//				        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		//					<span className="sr-only">Toggle navigation</span>
		//					<span className="icon-bar"></span>
		//					<span className="icon-bar"></span>
		//					<span className="icon-bar"></span>
		//				</button>
		//				<Link className="navbar-brand" route="/">S33D</Link>
		//			</div>
		//			{this.renderNavUser()}
		//			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		//				<ul className="nav navbar-nav">
		//					<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
		//					<li><Link route="/results">Results</Link></li>
		//				</ul>
		//				<form className="navbar-form navbar-left" role="search">
		//					<div className="form-group">
		//						<NavSearch dispatch={dispatch}/>
		//					</div>
		//					<button type="submit" className="btn btn-default">Submit</button>
		//				</form>
		//			</div>
		//		</div>
		//	</nav>
		//);
	}
});
