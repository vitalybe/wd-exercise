import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import GoogleMapReact from "google-map-react";

const styles = {};

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: this.props.initialLat, lng: this.props.initialLng };
  }

  onGoogleApiLoaded = () => {
    this.geocoder = new window.google.maps.Geocoder()
  };

  onClick = ({ lat, lng }) => {
    console.log(`changing lat -> ${lat} lng -> ${lng}`);
    this.setState({ lat, lng });
    this.geocoder.geocode({ location: { lat, lng } }, (status, results) => {
      console.log(status, results);
    });
  };

  render() {
    return (
      <div style={{ height: "10em", width: "10em" }}>
        <GoogleMapReact
          onGoogleApiLoaded={this.onGoogleApiLoaded}
          onClick={this.onClick}
          defaultCenter={{ lat: this.props.initialLat, lng: this.props.initialLng }}
          defaultZoom={11}
          options={{ fullscreenControl: false }}>
          <div
            lat={this.state.lat}
            lng={this.state.lng}
            style={{ height: "1em", width: "1em", backgroundColor: "red" }}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  onSelectionChanged: PropTypes.func.isRequired,

  initialLat: PropTypes.number.isRequired,
  initialLng: PropTypes.number.isRequired,
};
