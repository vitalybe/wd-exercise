import React, { Component } from "react";
import { Route, withRouter, Redirect, matchPath } from "react-router-dom";

import { Icon, Menu } from "semantic-ui-react";
import LocationsListView from "./locationsListView";

import { categories, Category } from "../model/categories";
import { locations, Location } from "../model/locations";

// TODO: Remove
categories.push(new Category("cat1"), new Category("cat2"), new Category("cat3"));
// locations.push(new Location(categories[0], "loc1", "addr1", 59.95, 30.33));
// locations.push(new Location(categories[0], "loc2", "addr2", 59.95, 30.33));
// locations.push(new Location(categories[0], "loc3", "addr3", 59.95, 30.33));

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

class MainContainer extends Component {
  render() {

    return (
      <div style={styles.container}>

        <Route exact path="/" render={() => <Redirect to="/locations" />} />
        <Route path="/locations" component={LocationsListView}/>

        <Menu attached="bottom" tabular style={styles.menuBottom}>
          <Menu.Item
            active={matchPath(this.props.location.pathname, {path: "/categories"}) !== null}
            onClick={() => this.props.history.push("/categories")}>
            <Icon name="tags" />
            Categories
          </Menu.Item>

          <Menu.Item
            active={matchPath(this.props.location.pathname, {path: "/locations"}) !== null}
            onClick={() => this.props.history.push("/locations")}>
            <Icon name="marker" />
            Locations
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(MainContainer);
