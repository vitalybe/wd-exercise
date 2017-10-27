import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Segment, Accordion, Button } from "semantic-ui-react";
import TopMenu from "./topMenu";
import { locations } from "../model/locations";
import LocationsView from "./locationView";

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

export default class LocationsListView extends Component {
  state = { activeItem: "" };

  handleItemClick = name => this.setState({ activeItem: name });

  constructor() {
    super();
  }

  component;

  render() {
    let { activeItem } = this.state;
    if (!activeItem && locations.length) {
      activeItem = locations[0].name;
    }

    return (
      <div>
        <TopMenu />

        <Segment attached>
          <Accordion styled style={styles.items}>
            {locations.map(location => {
              return [
                <Accordion.Title
                  style={{ ...(activeItem === location.name ? styles.itemSelected : null) }}
                  onClick={() => this.handleItemClick(location.name)}>
                  {location.name}
                </Accordion.Title>,
                <LocationsView active={activeItem === location.name} location={location} />,
              ];
            })}
          </Accordion>
          <Button>Save</Button>
        </Segment>
      </div>
    );
  }
}
