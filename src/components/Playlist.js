import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './Playlist.css';

function Playlist (props) {
 const {content} = props;

 // FIXME : compute those in the bridge?
 const uid = content.url.split('/')[4];
 const id = content.url.split('/')[2];

 const img_url = "https://openwhyd.org/img/playlist/" + id + "_" + uid;

 const url = "http://localhost:8000" + content.url;

 const thumb_style = {backgroundImage: 'url("' + img_url + '")'};

 return (
  <Row>
   <a href={url} target="_blank">
   <Col xs={1}>
     <div className="thumb" style={thumb_style}></div>
   </Col>

   <Col xs={7}>
     <a href={url}>{content.name}</a>
   </Col>
   </a>

  </Row>
 );
}

function PlaylistList (props) {
 const {loading, elements} = props;

 console.log('List:render');

 var loading_spinner = <p>No playlist found</p>;

 if (loading) {
   loading_spinner =(
        <Row>
          <Col xs={8}>
            <p>Playlists loading</p>
          </Col>
        </Row>
  )
 }

 var child = <div></div>;
 
 if (elements && elements.length > 0) {
  loading_spinner = <div></div>
  child = elements.map((e, index) => (
          <Playlist key={e.name} content={e}>{e.name}></Playlist>
        ));
 }

 return (
 <div className="playlists">
  {child}
  {loading_spinner}
 </div>
 );
}

export default PlaylistList;
