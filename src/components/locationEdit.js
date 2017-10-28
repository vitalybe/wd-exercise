import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion, Input, Dropdown, Button } from "semantic-ui-react";
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
    this.setState({
      categoryName: this.props.location.category.name,
      name: this.props.location.name,
      address: this.props.location.address,
      lat: this.props.location.lat,
      long: this.props.location.long,

      modified: false,
    });
  }

  modifyValue = (valueName, newValue) => {
    this.setState({ [valueName]: newValue, modified: true });
  };

  onUpdate = () => {
    let location = this.props.location;

    let newCategory = categories.find(category => category.name === this.state.categoryName);
    if (newCategory) {
      location.category = newCategory;
    }

    location.name = this.state.name;
    location.address = this.state.address;
    location.lat = this.state.lat;
    location.long = this.state.long;

    this.setState({ modified: false });
  };

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
                onChange={(e, data) => this.modifyValue("categoryName", data.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Name: </td>
            <td style={styles.value}>
              <Input value={this.state.name} onChange={(e, data) => this.modifyValue("name", data.value)} />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Address: </td>
            <td style={styles.value}>
              <Input value={this.state.address} onChange={(e, data) => this.modifyValue("address", data.value)} />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Latitude: </td>
            <td style={styles.value}>
              <Input value={this.state.lat} onChange={(e, data) => this.modifyValue("lat", data.value)} />
            </td>
          </tr>
          <tr>
            <td style={styles.kind}>Longitude: </td>
            <td style={styles.value}>
              <Input value={this.state.long} onChange={(e, data) => this.modifyValue("long", data.value)} />
            </td>
          </tr>
        </table>

        <Button onClick={this.onUpdate} disabled={!this.state.modified}>
          Update
        </Button>
      </Accordion.Content>
    );
  }
}

LocationEdit.propTypes = {
  active: PropTypes.bool.required,
  location: PropTypes.instanceOf(Location).isRequired,
};
