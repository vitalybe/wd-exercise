import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import {Checkbox, Divider, Dropdown, Header, Label, Segment} from "semantic-ui-react";
import { observer } from "mobx-react";

import { Accordion } from "semantic-ui-react";
import TopMenu from "../topMenu";
import LocationsListView from "./locationsListView";
import { categories } from "../../model/categories";
import { locations } from "../../model/locations";
import LocationEdit from "./locationEdit";

@observer
export default class LocationsGroupsListView extends Component {
  state = {
    toGroupByCategory: false,
    toFilterByCategory: false,
    showOnlyCategory: categories[0].name,
    selectedLocationName: "",
  };

  onSelectedLocationChange = name => {
    this.setState({ selectedLocationName: name });
  };

  render() {
    let pathname = this.props.location.pathname;
    let sortedLocations = locations.sort(location => location.name);

    return (
      <div className="locations">
        <TopMenu />
        <Segment attached>
          <div className="view-controls">
            <div className="filter">
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
            </div>
            <Checkbox
              className="group"
              label="Group by category"
              disabled={this.state.toFilterByCategory}
              onChange={(e, data) => this.setState({ toGroupByCategory: data.checked })}
            />
            <Divider />
          </div>

          {this.state.toGroupByCategory || this.state.toFilterByCategory
            ? categories
                .filter(
                  category => (this.state.toFilterByCategory ? category.name === this.state.showOnlyCategory : true)
                )
                .map(category => {
                  return (
                    <div key={category.name}>
                      <Header>
                        Category {category.name}
                      </Header>
                      <LocationsListView
                        locations={sortedLocations.filter(location => location.category.name === category.name)}
                        selectedLocationName={this.state.selectedLocationName}
                        onSelectedLocationChange={this.onSelectedLocationChange}
                      />
                    </div>
                  );
                })
            : <div>
                <Header>All categories</Header>
                <LocationsListView
                  locations={sortedLocations}
                  selectedLocationName={this.state.selectedLocationName}
                  onSelectedLocationChange={this.onSelectedLocationChange}
                />
              </div>}

          {pathname === this.props.match.url + "/add"
            ? <div>
                <Accordion styled fluid>
                  <Accordion.Title className="item-selected">New location</Accordion.Title>
                  <LocationEdit />
                </Accordion>
              </div>
            : null}
        </Segment>
      </div>
    );
  }
}
