import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion } from "semantic-ui-react";
import { Location } from "../model/locations";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class LocationsView extends Component {
  render() {
    return (
      <Accordion.Content active={this.props.active}>
        <table>
          <tr>
            <td style={styles.kind}>Category: </td>
            <td style={styles.value}>
              {this.props.location.category.name}
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Name: </td>
            <td style={styles.value}>
              {this.props.location.name}
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
              {this.props.location.long}
            </td>
          </tr>
        </table>
      </Accordion.Content>
    );
  }
}

LocationsView.propTypes = {
  active: PropTypes.bool.required,
  location: PropTypes.instanceOf(Location).isRequired,
};
