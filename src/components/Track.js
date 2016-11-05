import React from 'react';
import {Row, Col} from 'react-bootstrap';
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
  <Row>
    <a href={original_url} target="_blank">
    <Col xs={1}>
        <div className="thumb" style={thumb_style}></div>
    </Col>

    <Col xs={7}>
     {content.name}
    </Col>
    </a>

  </Row>
 );
}

// NOTE their might be a cleaner way to hide the elements
// than replacing them with empty parts?
function TrackList (props) {
 const {loading, elements} = props;

 console.log('List:render');

 var loading_spinner = <p>No track found</p>;

 if (loading) {
   loading_spinner =(
        <Row>
          <Col xs={8}>
            <p>Tracks loading</p>
          </Col>
        </Row>
  )
 }

 var child = <div></div>;
 
 if (elements && elements.length > 0) {
  loading_spinner = <div></div>
  child = elements.map((e, index) => (
           <Track key={e.name} content={e}>{e.name}></Track>
        ));
 }

 return (
 <div className="tracks">
   {child}
   {loading_spinner}
 </div>
 );
}

export default TrackList;
