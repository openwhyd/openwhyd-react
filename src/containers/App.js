import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';

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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>

      <Grid>
        {this.props.children}
      </Grid>

     </div>
    );
  }
}

//export default App;
export default App;
