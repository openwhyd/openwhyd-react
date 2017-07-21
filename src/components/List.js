import React from 'react';
import './List.css';

// Renders a list of elements
function List (props) {
   const {elements, component, name, wait_action} = props;
      // if elements.length > 0
      // else if wait_action in store
      //  loading {name}
      // else
      //  no {name} yet

   console.log('List:render');

   return (
   <div className="{name}">
    {elements.map((e, index) => (<component key={e.name} content={e}>{e.name}</component>))}
   </div>
   );
}

// example : List(tracks, Track, "tracks", GET_TRACKS_REQUEST);

export default List;
