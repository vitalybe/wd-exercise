import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion, Input, Dropdown, Button } from "semantic-ui-react";
import { Location, locations } from "../model/locations";
import { categories } from "../model/categories";
import Map from "./map/map";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class LocationEdit extends Component {
  constructor(props) {
    super(props);

    if (this.props.location) {
      this.state = {
        categoryName: this.props.location.category.name,
        name: this.props.location.name,
        address: this.props.location.address,
        lat: this.props.location.lat,
        lng: this.props.location.lng,

        modified: false,
      };
    } else {
      this.state = {
        name: "",
        address: "",
        lat: 32.02,
        lng: 34.85,

        modified: false,
      };
    }
  }

  modifyValue = (valueName, newValue) => {
    this.setState({ [valueName]: newValue, modified: true });
  };

  fillLocationFromInput(location) {
    let newCategory = categories.find(category => category.name === this.state.categoryName);
    if (newCategory) {
      location.category = newCategory;
    }

    location.name = this.state.name;
    location.address = this.state.address;
    location.lat = this.state.lat;
    location.lng = this.state.lng;
  }

  onUpdate = () => {
    this.fillLocationFromInput(this.props.location);

    this.setState({ modified: false });
  };

  onCreate = () => {
    let location = new Location();
    this.fillLocationFromInput(location);
    locations.push(location);

    this.setState({ modified: false });
  };

  onMapLocationChanged = (lat, lng, address) => {
    console.log(`map location changed: ${lat}/${lng}. Address: ${address}`);
    let updatedState = { lat, lng, modified: true };
    if (address) {
      updatedState.address = address;
    }

    this.setState(updatedState);
  };

  render() {
    return (
      <Accordion.Content active={true}>
        <table>
          <tbody>
            <tr>
              <td style={styles.kind}>Name: </td>
              <td style={styles.value}>
                <Input value={this.state.name} onChange={(e, data) => this.modifyValue("name", data.value)} />
              </td>
            </tr>
            <tr>
              <td style={styles.kind}>Category: </td>
              <td style={styles.value}>
                <Dropdown
                  fluid
                  selection
                  placeholder="Select Category"
                  value={this.state.categoryName || ""}
                  options={categories.map(category => ({ text: category.name, value: category.name }))}
                  onChange={(e, data) => this.modifyValue("categoryName", data.value)}
                />
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
                <Input value={this.state.lat} onChange={(e, data) => this.modifyValue("lat", parseFloat(data.value))} />
              </td>
            </tr>
            <tr>
              <td style={styles.kind}>Longitude: </td>
              <td style={styles.value}>
                <Input value={this.state.lng} onChange={(e, data) => this.modifyValue("lng", parseFloat(data.value))} />
              </td>
            </tr>
          </tbody>
        </table>
        {this.props.location
          ? <Button onClick={this.onUpdate} disabled={!this.state.modified}>
              Update
            </Button>
          : <Button onClick={this.onCreate} disabled={!this.state.modified}>
              Create
            </Button>}
        <Map
          isReadOnly={false}
          initialLat={this.state.lat}
          initialLng={this.state.lng}
          onLocationChanged={this.onMapLocationChanged}
        />
      </Accordion.Content>
    );
  }
}

LocationEdit.propTypes = {
  location: PropTypes.object,
};
