import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion, Input, Dropdown } from "semantic-ui-react";
import { Location } from "../model/locations";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class LocationEdit extends Component {
  render() {
    return (
      <Accordion.Content active={this.props.active}>
        <table>
          <tr>
            <td style={styles.kind}>Category: </td>
            <td style={styles.value}>
              <Dropdown />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Name: </td>
            <td style={styles.value}>
              <Input />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Address: </td>
            <td style={styles.value}>
              <Input />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Latitude: </td>
            <td style={styles.value}>
              <Input />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Longitude: </td>
            <td style={styles.value}>
              <Input />
            </td>
          </tr>
        </table>
      </Accordion.Content>
    );
  }
}

LocationEdit.propTypes = {
  active: PropTypes.bool.required,
  location: PropTypes.instanceOf(Location).isRequired,
};
