import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion, Input, Dropdown } from "semantic-ui-react";
import { Location } from "../model/locations";
import { categories } from "../model/categories";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class LocationEdit extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.state = {
      categoryName: this.props.location.category.name,
      name: this.props.location.name,
      address: this.props.location.address,
      lat: this.props.location.lat,
      long: this.props.location.long,
    };
  }

  render() {
    return (
      <Accordion.Content active={this.props.active}>
        <table>
          <tr>
            <td style={styles.kind}>Category: </td>
            <td style={styles.value}>
              <Dropdown
                value={this.state.categoryName}
                options={categories.map(category => ({ text: category.name, value: category.name }))}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Name: </td>
            <td style={styles.value}>
              <Input value={this.state.name} onChange={(e, data) => this.setState({"name": data.value})} />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Address: </td>
            <td style={styles.value}>
              <Input value={this.state.address} onChange={(e, data) => this.setState({"address": data.value})} />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Latitude: </td>
            <td style={styles.value}>
              <Input value={this.state.lat} onChange={(e, data) => this.setState({"lat": data.value})} />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Longitude: </td>
            <td style={styles.value}>
              <Input value={this.state.long} onChange={(e, data) => this.setState({"long": data.value})} />
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
