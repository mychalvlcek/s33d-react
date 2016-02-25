import React, {Component, PropTypes} from 'react';
//import {loginUser, logoutUser} from '../actions/authed';
import Link from './Link';
import NavSearch from './NavSearch';
import Popover from './Popover';


function getImageUrl(x) {
	return 'x'
};

const PATHS = ['stream', 'likes'];

class Nav extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(e) {
		e.preventDefault();
		const {dispatch} = this.props;
		dispatch(loginUser());
	}

	logout(e) {
		e.preventDefault();
		const {dispatch} = this.props;
		dispatch(logoutUser())
	}

	renderArtworks(playlist) {
		const {songs} = this.props;
		return playlist.tracks.slice(0, 10).map(songId =>
			<img className='nav-playlist-image' key={songId} src={getImageUrl(songs[songId].artwork_url)}/>
		);
	}

	renderNavUser() {
		//const {authed, dispatch, navigator} = this.props;
		//const {path} = navigator.route;
		//const isActive = path[0] === 'me' ? true : false;
		//const targetRoute = isActive ? {path: ['songs'], query: {q: 'house'}} : {path: ['me', 'stream']};
		//
		//if (authed.user) {
		//    return (
		//        <Popover className='nav-user'>
		//            <div className='nav-user-link'>
		//                <img className='nav-authed-image' src={getImageUrl(authed.user.avatar_url)} />
		//                <i className='icon ion-chevron-down'></i>
		//                <i className='icon ion-chevron-up'></i>
		//            </div>
		//            <div className='nav-user-popover popover-content'>
		//                <ul className='nav-user-popover-list'>
		//                    <li className='nav-user-popover-item'>
		//                        <a href='#' onClick={this.logout}>Log Out</a>
		//                    </li>
		//                </ul>
		//            </div>
		//        </Popover>
		//    );
		//}

		return (
			<Popover className='nav-user'>
				<div className='nav-user-link'>
					<i className='icon ion-person'></i>
					<i className='icon ion-chevron-down'></i>
					<i className='icon ion-chevron-up'></i>
				</div>
				<div className='nav-user-popover popover-content'>
					<ul className='nav-user-popover-list'>
						<li className='nav-user-popover-item'>
							<a href='#' className='button orange block' onClick={this.login}>Sign into SoundCloud</a>
						</li>
					</ul>
				</div>
			</Popover>
		);
	}

	renderLikesLink() {
		//    const {authed, dispatch, navigator} = this.props;
		//    const {route} = navigator;
		//    if (!authed.user) {
		//        return;
		//    }
		//
		//    return (
		//        <div className='nav-nav-item'>
		//            <Link
		//                className={'nav-nav-user-link' + ('likes' === route.path[1] ? ' active' : '')}
		//                dispatch={dispatch}
		//                route={{path: ['me', 'likes']}}>
		//                <span className='nav-nav-user-link-text'>likes</span>
		//            </Link>
		//        </div>
		//    );
	}

	renderStreamLink() {
		//    const {authed, dispatch, navigator} = this.props;
		//    const {route} = navigator;
		//    const hasNewStreamSongs = authed.newStreamSongs.length > 0;
		//    if (!authed.user) {
		//        return;
		//    }
		//
		//    return (
		//        <div className='nav-nav-item'>
		//            <Link
		//                className={'nav-nav-user-link' + ('stream' === route.path[1] ? ' active' : '')}
		//                dispatch={dispatch}
		//                route={{path: ['me', 'stream']}}>
		//                {hasNewStreamSongs ? <div className='nav-nav-user-link-indicator'></div> : null}
		//                <span className='nav-nav-user-link-text'>stream</span>
		//            </Link>
		//        </div>
		//    );
	}


	renderPlaylists() {
		//    const {authed, authedPlaylists, dispatch} = this.props;
		//    return authed.playlists.map(playlistId => {
		//        const playlist = authedPlaylists[playlistId];
		//        return (
		//            <Link
		//                className='nav-playlist'
		//                dispatch={dispatch}
		//                key={playlistId}
		//                route={{path: ['me', 'playlists', playlistId]}}>
		//                <div className='nav-playlist-title'>
		//                    {`${playlist.title} (${playlist.track_count})`}
		//                </div>
		//                <div className='nav-playlist-images'>
		//                    {this.renderArtworks(playlist)}
		//                </div>
		//            </Link>
		//        );
		//    });
	}

	renderPlaylistsPopover() {
		//    const {authed, dispatch, navigator} = this.props;
		//    const {path} = navigator.route;
		//    const playlist = this.getPlaylist();
		//
		//    if (!authed.user) {
		//        return;
		//    }
		//
		//    return (
		//        <Popover className='nav-nav-item nav-playlists'>
		//            <div className={'nav-nav-user-link' + (path[1] === 'playlists' ? ' active' : '')}>
		//                <span className='nav-nav-user-link-text'>{playlist}</span>
		//                <i className='icon ion-chevron-down'></i>
		//                <i className='icon ion-chevron-up'></i>
		//            </div>
		//            <div className='nav-playlists-popover popover-content'>
		//                {this.renderPlaylists()}
		//            </div>
		//        </Popover>
		//    );
	}

	render() {
		const {dispatch} = this.props;
		return (
			<div id="navbar" className="rubix-grid container-fluid" style={{zIndex:9999985}}>
				<div className="row">
					<div className="col-xs-12">
						<nav id="rubix-nav-header" className="navbar navbar-fixed-top navbar-light bg-faded" role="navigation" style={{zIndex:9999998}}>
							<div className="container-fluid">
								<div className="row">
									<div className="col-xs-3 col-sm-3 visible-xs-block visible-sm-block">
										<div className="navbar-content">
											<ul className="nav navbar-nav">
												<li data-id="sidebar-btn" className="sidebar-btn" href="/"><a
													href="/"><span className="rubix-icon fa fa-bars"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-xs-6 col-sm-6 col-md-4">
										<ul className="Breadcrumb">
											<li>Countries</li>
										</ul>
									</div>
									<div className="col-xs-3 col-sm-3 col-md-8">
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
}

Nav.propTypes = {};

export default Nav;
