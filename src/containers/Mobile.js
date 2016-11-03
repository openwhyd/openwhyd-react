import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';

import TrackList from '../components/Track.js';
import PlaylistList from '../components/Playlist.js';
import Search from '../components/Search.js';

import tracks_api from '../actions/api/tracks.js';
import playlists_api from '../actions/api/playlists.js';

// DEBUG
class Mobile extends Component {
  componentDidMount() {
    const { dispatch, params }  = this.props;

    dispatch(tracks_api.get({_id: params.userId}));
    dispatch(playlists_api.get({_id: params.userId}));
  }

  render() {
    return (
          <div className="mobile">
            <Search/>

            <h1>My playlists</h1>
            <PlaylistList
             loading={this.props.playlists.loading}
             elements={this.props.playlists.playlists}/>

            <h1>My tracks</h1>
            <TrackList
             loading={this.props.tracks.loading}
             elements={this.props.tracks.tracks}/>

          </div>
        );
  }
}

function mapStateToProps(state, props) {
  return {
    tracks: state.tracks,
    playlists: state.playlists
  };
}

export default connect(mapStateToProps)(Mobile);
