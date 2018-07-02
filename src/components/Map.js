import React, { Component } from 'react';
import FloatingPanel from "./FloatingPanel";
import L from 'leaflet';
import { RasterCoords } from 'leaflet-rastercoords';

const rotatingArrow = L.icon({
  iconUrl: 'https://i.imgur.com/D0pBBzL.gif',
  iconSize: [35, 37],
  iconAnchor: [19, 19],
  popupAnchor: [0, 0]
});

class Map extends Component {
    state = {
      line: null,
      imageSize: [8306, 4850],
      guessLocation: null
    }

    componentDidMount() {
      this.map = L.map('mapContainer', {
            zoomControl: false,
            attributionControl: false
      });
      this.rc = new L.RasterCoords(this.map, this.state.imageSize);
      this.poly = L.polyline([0, 0], { color: 'red'});
      this.marker = L.marker([-500, -500], {icon: rotatingArrow});
      this.map.setMinZoom(4);
      this.map.setMaxZoom(this.rc.zoomLevel() + 1);
      this.map.setView(this.rc.unproject([4948,2491]), 5);
      this.surfaceLayer = L.tileLayer("/tiles/{z}/{x}/{y}.png", {
        edgeBufferTiles: 2,
        noWrap: true
      }).addTo(this.map);
      this.isMarker = false;
      this.submitted = false;

      this.map.on('click', (event) => {
        const coords = this.rc.project(event.latlng);
        console.log(`${coords.x}, ${coords.y}`)
        // Set this.markedLocation equal to where they clicked
        this.markedLocation = this.rc.unproject([Math.floor(coords.x), Math.floor(coords.y)]);
        if (this.submitted) {
          const score = this.calculateScore(this.poly.getLatLngs());
          return this.showScorePopup(this.state.guessLocation, score)
        }
        // Add Spinning Arrow to Map
        if (!this.isMarker) this.marker.addTo(this.map)
        this.marker.setLatLng(this.markedLocation);
        // Bring up the Popup for Submitting the guess
        this.openGuessPopup(event.latlng);

        // What happens when they make their guess
        this.setState({ guessLocation: event.latlng }, () => {
          document.getElementById("submitbutton").onclick = () => this.onSubmitOfGuess(this.state.guessLocation);
        })

        // console.log("LOCATION OF CLICK: " + coords)
        // console.log("SCORE: " +);
      })
    }

    componentDidUpdate() {
      // console.log(this.props.location.location)
    }

  // Calculate the score based off distance between their guess and the answer
  calculateScore([x, y]) {
    const distance = Math.min(((x.distanceTo(y) / 100) - 50), 1000);
    const inverseScore = Math.floor(Math.max(0, distance));
    return 1000 - inverseScore;
  }

  // Move Line to connect Marked Location and Final Location
  showLine = () => {
    if (!this.poly) return;
    this.poly.setLatLngs([
      this.rc.unproject(this.props.location.location),
      this.markedLocation]).addTo(this.map);
  }

  // Remove everything from the map
  cleanupMap = () => {
    if (!this.poly) return;
    this.map.closePopup();
    this.marker.setLatLng([-500, -500]);
    this.isMarker = false;
    this.submitted = false;
    this.poly.setLatLngs([[-500, -500], [-500, -500]]).addTo(this.map);
  }

  // Open a popup at a location to submit their guess
  openGuessPopup(location) {
    L.popup()
      .setLatLng(location)
      .setContent(`<h3 style="color: yellow; text-align: center">Click here to submit your guess!</h3>
    <button id="submitbutton" style="margin: 0 auto; display: block" onclick="this.">Submit</button>`)
      .openOn(this.map);
  }

  // What happens when they submit their guess
  onSubmitOfGuess(location) {
    this.submitted = true;
    this.showLine();
    const score = this.calculateScore(this.poly.getLatLngs());
    this.map.closePopup();
    this.showScorePopup(location, score);
    this.map.fitBounds(this.poly.getBounds());

    // When they click to go to the next location
    document.getElementById("nextButton").onclick = () => {
      this.cleanupMap();
      this.props.setRandomLocation();
    }
  }

// Show their score after they made their guess
  showScorePopup(location, score) {
    L.popup()
       .setLatLng(location)
       .setContent(`<p>Your score is ${score} out of 1000!</p><button id="nextButton" style="margin: 0 auto; display: block" onclick="this.">Next</button>`)
       .openOn(this.map);
  }

  render() {
    return (
        <div id="mapContainer">
          <div id="menu">
            <FloatingPanel location={this.props.location} setRandomLocation={this.props.setRandomLocation}/>
          </div>
        </div>
    );
  }
}

export default Map;
