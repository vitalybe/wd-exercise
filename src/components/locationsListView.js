import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Segment, Accordion } from "semantic-ui-react";
import TopMenu from "./topMenu";
import { locations } from "../model/locations";
import LocationView from "./locationView";
import LocationEdit from "./locationEdit";
import LocationDelete from "./locationDelete";
import { observer } from "mobx-react";
import { Redirect, Route } from "react-router-dom";

const styles = {
  items: {
    flex: 1,
    width: "100%",
  },
  itemSelected: {
    backgroundColor: "lightGrey",
    color: "black",
  },
};

@observer
export default class LocationsListView extends Component {
  state = { activeItem: "" };

  handleItemClick = name => this.setState({ activeItem: name });

  render() {
    let { activeItem } = this.state;
    if (!activeItem && locations.length) {
      activeItem = locations[0].name;
    }

    let pathname = this.props.location.pathname;

    return (
      <div>
        <Route exact path={this.props.match.url} render={() => <Redirect to={this.props.match.url + "/view"} />} />

        <TopMenu onSelectionChanged={this.onTopMenuChanged} />

        <Segment attached>
          <Accordion styled style={styles.items}>
            {locations.map(location => {
              return (
                <div key={location.name}>
                  <Accordion.Title
                    style={{
                      ...(activeItem === location.name && pathname !== this.props.match.url + "/add"
                        ? styles.itemSelected
                        : null),
                    }}
                    onClick={() => this.handleItemClick(location.name)}>
                    {location.name}
                  </Accordion.Title>
                  {(() => {
                    if (activeItem === location.name) {
                      switch (pathname) {
                        case this.props.match.url + "/view":
                          return <LocationView location={location} />;

                        case this.props.match.url + "/edit":
                          return <LocationEdit location={location} />;

                        case this.props.match.url + "/delete":
                          return [<LocationView location={location} />, <LocationDelete location={location} />];
                      }
                    }
                  })()}
                </div>
              );
            })}
            {pathname === this.props.match.url + "/add"
              ? [<Accordion.Title style={{ ...styles.itemSelected }}>New location</Accordion.Title>, <LocationEdit />]
              : null}
          </Accordion>
        </Segment>
      </div>
    );
  }
}
