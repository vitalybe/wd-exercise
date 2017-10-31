import React, { Component } from "react";
import { Route, withRouter, Redirect, matchPath } from "react-router-dom";

import { Icon, Menu } from "semantic-ui-react";
import LocationsGroupsListView from "./location/locationsGroupsListView";
import CategoriesListView from "./category/categoriesListView";

class MainContainer extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" render={() => <Redirect to="/locations" />} />
        <Route path="/locations" component={LocationsGroupsListView} />
        <Route path="/categories" component={CategoriesListView} />

        <Menu attached="bottom" tabular className="bottomMenu">
          <Menu.Item
            active={matchPath(this.props.location.pathname, { path: "/categories" }) !== null}
            onClick={() => this.props.history.push("/categories")}>
            <Icon name="tags" />
            Categories
          </Menu.Item>

          <Menu.Item
            active={matchPath(this.props.location.pathname, { path: "/locations" }) !== null}
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
