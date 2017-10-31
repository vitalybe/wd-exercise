import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import GoogleMapReact from "google-map-react";
import Marker from "./marker";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: this.props.initialLat, lng: this.props.initialLng };
  }

  componentWillReceiveProps(nextProps) {
    console.log(`setting lat/lng: ${nextProps.initialLat}/${nextProps.initialLng}`);
    this.setState({ lat: nextProps.initialLat, lng: nextProps.initialLng });
  }

  onGoogleApiLoaded = () => {
    this.geocoder = new window.google.maps.Geocoder();
  };

  onClick = ({ lat, lng }) => {
    console.log(`changing lat -> ${lat} lng -> ${lng}`);
    this.setState({ lat, lng });

    if (this.props.onLocationChanged) {
      this.props.onLocationChanged(lat, lng);
    }

    // getting the address
    this.geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results && results.length > 0)
        this.props.onLocationChanged(lat, lng, results[0].formatted_address);
    });
  };

  render() {
    return (
      <div style={{ height: "10em", width: "10em" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCrMf3KYulRhiTyhbJuCu3QPTdwhLUBskA" }}
          onGoogleApiLoaded={this.onGoogleApiLoaded}
          yesIWantToUseGoogleMapApiInternals
          onClick={!this.props.isReadOnly ? this.onClick : null}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          defaultZoom={11}
          options={{ fullscreenControl: false }}>
          <Marker lat={this.state.lat} lng={this.state.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  onLocationChanged: PropTypes.func,

  initialLat: PropTypes.number.isRequired,
  initialLng: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
};
