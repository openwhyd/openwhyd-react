import React, { Component } from 'react';
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
     <div className="playlist">
         <a href={url} target="_blank">
           <div className="thumb" style={thumb_style}></div>
           {content.name}
         </a>
         <div className="btnAdd">✚</div>
     </div>
 );
}

function PlaylistList (props) {
 const {loading, elements} = props;

 console.log('List:render');

 var child = <p>No playlist found.</p>;

 if (loading) {
   child = <p>Playlists loading</p>;
 }
 else if (elements && elements.length > 0) {
  child = elements.map((e, index) => (
        <div key={e.name} className="playlist">
          <Playlist content={e}>{e.name}></Playlist>
        </div>
        ));
 }

 return (
 <div className="playlists">
  {child}
 </div>
 );
}

export default PlaylistList;
