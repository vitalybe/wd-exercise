import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Icon, Menu, } from "semantic-ui-react";

import LocationsView from "./components/locationsView";

import { categories } from "./model/categories"
import { locations } from "./model/locations"


const styles = {
  container: {
    margin: "auto",
    width: "50em",
    marginTop: "3em",
  },
  menuBottom: {
    marginLeft: "-1px",
  },
};

class App extends Component {
  state = { activeItem: "categories" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={styles.container}>

        <LocationsView />

        <Menu attached="bottom" tabular style={styles.menuBottom}>
          <Menu.Item name="categories" active={activeItem === "categories"} onClick={this.handleItemClick}>
            <Icon name="tags" />
            Categories
          </Menu.Item>

          <Menu.Item name="locations" active={activeItem === "locations"} onClick={this.handleItemClick}>
            <Icon name="marker" />
            Locations
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
