import React, { Component } from 'react';
import './App.css';

import Mobile from './Mobile.js';

class App extends Component {
  // FIXME : on componentMount?
        // FIXME
        // if connected

        // <Mobile > etc
        // else display message to say connect 

  constructor(props) {
    super(props);
  }

  render() {
    console.log('App:render');

    return (
      <div className="App">
      <Mobile/>
     </div>
    );
  }
}

//export default App;
export default App;
