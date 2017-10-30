import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Segment, Accordion, Button } from "semantic-ui-react";
import TopMenu from "./topMenu";
import { locations } from "../model/locations";
import LocationView from "./locationView";
import LocationEdit from "./locationEdit";
import LocationDelete from "./locationDelete";
import { observer } from "mobx-react";

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

  onTopMenuChanged = menuName => this.setState({ activeMenu: menuName });

  constructor() {
    super();
  }

  render() {
    let { activeItem } = this.state;
    if (!activeItem && locations.length) {
      activeItem = locations[0].name;
    }

    return (
      <div>
        <TopMenu onSelectionChanged={this.onTopMenuChanged} />

        <Segment attached>
          <Accordion styled style={styles.items}>
            {locations.map(location => {
              return [
                <Accordion.Title
                  style={{
                    ...(activeItem === location.name && this.state.activeMenu !== "add" ? styles.itemSelected : null),
                  }}
                  onClick={() => this.handleItemClick(location.name)}>
                  {location.name}
                </Accordion.Title>,
                (() => {
                  if (activeItem === location.name) {
                    switch (this.state.activeMenu) {
                      case "view":
                        return <LocationView location={location} />;

                      case "edit":
                        return <LocationEdit location={location} />;

                      case "delete":
                        return [<LocationView location={location} />, <LocationDelete location={location} />];
                    }
                  }
                })(),
              ];
            })}
            {this.state.activeMenu === "add"
              ? [<Accordion.Title style={{ ...styles.itemSelected }}>New location</Accordion.Title>, <LocationEdit />]
              : null}
          </Accordion>
        </Segment>
      </div>
    );
  }
}
