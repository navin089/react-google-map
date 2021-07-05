import React, { Component } from "react";
import { Map, Polygon, GoogleApiWrapper } from "google-maps-react";

export class App extends Component {
  render() {
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];

    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%", position: "relative" }}
          className={"map"}
          zoom={14}
        >
          <Polygon
            paths={triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(App);
