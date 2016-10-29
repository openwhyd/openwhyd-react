import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';

import TrackList from '../components/Track.js';
import PlaylistList from '../components/Playlist.js';
import Search from '../components/Search.js';

//import tracks_api from '../actions/api/tracks.js';

// DEBUG
import {tracks, playlists} from './mock_data.js';

class Mobile extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  
//    const { dispatch }  = this.props; // FIXME : tracks, playlists

//    dispatch(tracks_api.get({_id: '5095275a7e91c862b2a83f49'}));
  }

  render() {
   // for each in tracks and playlists
   // if wait_action in store
   //  loading {name}

    return (
          <div className="mobile">
          <Search/>
          <h1>My playlists</h1>
          <PlaylistList elements={playlists}/>
          <h1>My tracks</h1>
          <TrackList elements={tracks}/>
          </div>
        );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    playlists: state.playlists
  };
}

export default connect(mapStateToProps)(Mobile);
