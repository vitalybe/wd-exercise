import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Checkbox, Dropdown, Header, Label, Segment } from "semantic-ui-react";
import { observer } from "mobx-react";

import TopMenu from "./topMenu";
import LocationsListView from "./locationsListView";
import { categories } from "../model/categories";
import { locations } from "../model/locations";

@observer
export default class LocationsGroupsListView extends Component {
  state = { toGroupByCategory: false, toFilterByCategory: false, showOnlyCategory: categories[0].name };

  render() {
    let sortedLocations = locations.sort(location => location.name);

    return (
      <div>
        <TopMenu />
        <Segment attached>
          <Checkbox
            label="Filter by category"
            onChange={(e, data) => this.setState({ toFilterByCategory: data.checked })}
          />
          <Dropdown
            fluid
            selection
            disabled={!this.state.toFilterByCategory}
            placeholder="Category"
            value={this.state.showOnlyCategory}
            options={categories.map(category => ({ text: category.name, value: category.name }))}
            onChange={(e, data) => this.setState({ showOnlyCategory: data.value })}
          />
          <Checkbox
            label="Group by category"
            disabled={this.state.toFilterByCategory}
            onChange={(e, data) => this.setState({ toGroupByCategory: data.checked })}
          />

          {this.state.toGroupByCategory || this.state.toFilterByCategory
            ? categories
                .filter(
                  category => (this.state.toFilterByCategory ? category.name === this.state.showOnlyCategory : true)
                )
                .map(category => {
                  return (
                    <div>
                      <Header>
                        Category {category.name}
                      </Header>
                      <LocationsListView
                        locations={sortedLocations.filter(location => location.category.name === category.name)}
                      />
                    </div>
                  );
                })
            : <LocationsListView locations={sortedLocations} />}
        </Segment>
      </div>
    );
  }
}
