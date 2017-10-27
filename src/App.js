import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

import LocationsListView from "./components/locationsListView";

import { categories, Category } from "./model/categories";
import { locations, Location } from "./model/locations";

// TODO: Remove
categories.push(new Category("cat1"), new Category("cat2"), new Category("cat3"));
locations.push(new Location(categories[0], "loc1", "addr1", "1.1", "1.1"));
locations.push(new Location(categories[0], "loc2", "addr2", "1.2", "1.2"));
locations.push(new Location(categories[0], "loc3", "addr3", "1.3", "1.3"));

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
        <LocationsListView />

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
