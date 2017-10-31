import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion } from "semantic-ui-react";
import { Location } from "../model/locations";
import Map from "./map/map";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class LocationView extends Component {
  render() {
    return (
      <Accordion.Content active={true}>
        <table>
          <tbody>
            <tr>
              <td style={styles.kind}>Name: </td>
              <td style={styles.value}>
                {this.props.location.name}
              </td>
            </tr>
            <tr>
              <td style={styles.kind}>Category: </td>
              <td style={styles.value}>
                {this.props.location.category.name}
              </td>
            </tr>
            <tr>
              <td style={styles.kind}>Address: </td>
              <td style={styles.value}>
                {this.props.location.address}
              </td>
            </tr>
            <tr>
              <td style={styles.kind}>Latitude: </td>
              <td style={styles.value}>
                {this.props.location.lat}
              </td>
            </tr>
            <tr>
              <td style={styles.kind}>Longitude: </td>
              <td style={styles.value}>
                {this.props.location.lng}
              </td>
            </tr>
          </tbody>
        </table>
        <Map isReadOnly={true} initialLat={this.props.location.lat} initialLng={this.props.location.lng} />
      </Accordion.Content>
    );
  }
}

LocationView.propTypes = {
  location: PropTypes.object.isRequired,
};
