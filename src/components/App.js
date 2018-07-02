import React, { Component, Fragment } from 'react';
import Map from "./Map";
import L from 'leaflet';
import locations from "../assets/locations";

L.RasterCoords = require('leaflet-rastercoords')

class App extends Component {
  state = {
    location: null,
    scores: []
  }

  componentWillMount() {
    this.setRandomLocation();
  }

  setRandomLocation() {
    const location = locations[Math.floor(Math.random() * locations.length)];
    this.setState({ location })
  }

  render() {
    return (
      <Fragment>
        <Map location={this.state.location} setRandomLocation={this.setRandomLocation.bind(this)} />
      </Fragment>
    );
  }
}

export default App;
