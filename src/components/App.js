import React, { Component, PropTypes } from 'react';
import './App.css';
import {connect} from 'react-redux';

import TrackList from './Track.js';
import PlaylistList from './Playlist.js';
import Search from './Search.js';

import tracks_api from '../actions/api/tracks.js';

// DEBUG
const tracks = [
{"_id":"5808a31c87890f4a73680ec2","uId":"5095275a7e91c862b2a83f49","uNm":"Sir Fox","text":"","name":"Stupeflip / MON CHIEN EST MØRT _Stupeflip vite_","eId":"/yt/6VO8R1vF9O0","ctx":"bk","img":"https://i.ytimg.com/vi/6VO8R1vF9O0/default.jpg","lov":[]},
{"_id":"5808a12187890f4a73680ce4","uId":"5095275a7e91c862b2a83f49","uNm":"Sir Fox","text":"","pl":{"name":"Hip hop/Trip hop/Rap","id":1},"name":"Les bidons veulent le guidon - X-men / Oxmo Puccino / Pit Baccardi / Lunatic (Time Bomb)","eId":"/yt/03rmoVz927w","ctx":"bk","img":"https://i.ytimg.com/vi/03rmoVz927w/default.jpg","lov":[]},
{"_id":"5806604a87890f4a73675c85","uId":"5095275a7e91c862b2a83f49","uNm":"Sir Fox","text":"#Dusale.","pl":{"name":"Dubstep","id":12},"name":"DR FRENESY - TIME OF GODS [FREE]","eId":"/sc/doctor-frenesy/dr-frenesy-time-of-gods#https://api.soundcloud.com/tracks/284958664/stream","ctx":"bk","img":"https://i1.sndcdn.com/artworks-000185527455-gqdiiz-large.jpg","nbP":7,"lov":[]},
];

const playlists = [
{"id":26,"name":"Bigbeat","url":"/u/5095275a7e91c862b2a83f49/playlist/26","nbTracks":1}
,{"id":22,"name":"Rock","url":"/u/5095275a7e91c862b2a83f49/playlist/22","nbTracks":1}
,{"id":21,"name":"Trap","url":"/u/5095275a7e91c862b2a83f49/playlist/21","nbTracks":9}
,{"id":19,"name":"Blues","url":"/u/5095275a7e91c862b2a83f49/playlist/19","nbTracks":3},
];

class App extends Component {
  // FIXME : on componentMount?
        // FIXME
        // if connected

        // <TrackList > etc
        // else display message to say connect 
  constructor(props) {
    super(props);

    const { dispatch }  = this.props; // FIXME : tracks, playlists

    dispatch(tracks_api.get({_id: '5095275a7e91c862b2a83f49'}));
  }

  render() {
    console.log('App:render');

   // for each in tracks and playlists
   // if wait_action in store
   //  loading {name}

    return (
      <div className="App">
        <Search/>
        <h1>My playlists</h1>
        <PlaylistList elements={playlists}/>
        <h1>My tracks</h1>
        <TrackList elements={tracks}/>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    playlists: state.playlists
  };
}

//export default App;
export default connect(mapStateToProps)(App);
