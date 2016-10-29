import React, { Component } from 'react';
import './Playlist.css';

function Playlist (props) {
 const {content} = props;

 console.log('Playlist:render');

 const uid = content.url.split('/')[2];

 const img_url = "https://openwhyd.org/img/playlist/" + uid + "_" + content.id;

 const url = "https://openwhyd.org" + content.url;

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
   const {elements} = props;

   console.log('List:render');

   var child = <p>No playlist found.</p>;

   if (elements.length > 0) {
    child = elements.map((e, index) => (
          <div className="playlist">
            <Playlist key={e.name} content={e}>{e.name}></Playlist>
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
