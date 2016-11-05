import React, { Component, PropTypes } from 'react';
import {Row, Col} from 'react-bootstrap';

import {connect} from 'react-redux';

import NavigationBar from '../components/NavBar.js';
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

  loadMore() {
    const {dispatch, tracks, params} = this.props;

    const last_track = tracks.tracks[tracks.tracks.length - 1];

    dispatch(tracks_api.get({_id: params.userId}, null, last_track._id))
  }

  render() {
    const {tracks, playlists} = this.props;

    var loadMore = <p></p>
    if (tracks.tracks && tracks.tracks.length > 0) {
      loadMore =
        <input type="button" onClick={this.loadMore.bind(this)} value="Load more" />
    }

    // FIXME : move Search to NavBar
    return (
          <div className="mobile">

            <Row>
              <Col xs={8}>
                <Search/>
              </Col>
            </Row>

            <Row>
              <Col xs={8}>
                <h1>Playlists</h1>
              </Col>
            </Row>

            <PlaylistList
             loading={playlists.loading}
             elements={playlists.playlists}/>

            <Row>
              <Col xs={8}>
                <h1>Tracks</h1>
              </Col>
            </Row>

            <TrackList
             loading={tracks.loading}
             elements={tracks.tracks}/>

             {loadMore}

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
