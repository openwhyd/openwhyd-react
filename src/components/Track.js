import React from 'react';
import './Track.css';

function getURLByProvider(url) {
  const url_split = url.split('/');
  const provider = url_split[1];

  switch (provider) {
    case "yt":
      return "https://www.youtube.com/watch?v=" + url_split[2];

    case "sc":
      return "https://soundcloud.com/" + url_split.slice(2).join('/');

    default:
      throw 'UNKNOWN_PROVIDER :' + provider
  }
}

function Track (props) {
 const {content} = props;

 console.log('Track:render');

 const thumb_style = {backgroundImage: 'url("' + content.img + '")'};

 const original_url = getURLByProvider(content.eId);

 return (
     <div className="track">
         <a href={original_url} target="_blank">
           <div className="thumb" style={thumb_style}></div>
           {content.name}
         </a>
         <div className="btnAdd">✚</div>
     </div>
 );
}

function TrackList (props) {
 const {loading, elements} = props;

 console.log('List:render');

 var child = <p>No track found</p>;

 if (loading) {
   child = <p>Tracks loading</p>;
 }
 else if (elements && elements.length > 0) {
  child = elements.map((e, index) => (
         <div key={e.name} className="track">
           <Track content={e}>{e.name}></Track>
         </div>
        )
  );
 }

 return (
 <div className="tracks">
   {child}
 </div>
 );
}

export default TrackList;
