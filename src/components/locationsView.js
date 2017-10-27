import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Menu, Segment, Accordion, Input, Button } from "semantic-ui-react";
import TopMenu from "./topMenu";
import { locations } from "../model/locations";

const styles = {
  items: {
    flex: 1,
    width: "100%",
  },
  kind: {
    fontWeight: "bold",
  },
  itemSelected: {
    backgroundColor: "lightGrey",
    color: "black"
  },

};

export default class LocationsView extends Component {
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
                <Accordion.Content active={activeItem === location.name}>
                  <table>
                    <tr>
                      <td style={styles.kind}>Category: </td>
                      <td style={styles.value}>
                        {location.category.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.kind}>Name: </td>
                      <td style={styles.value}>
                        {location.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.kind}>Address: </td>
                      <td style={styles.value}>
                        {location.address}
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.kind}>Latitude: </td>
                      <td style={styles.value}>
                        {location.lat}
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.kind}>Longitude: </td>
                      <td style={styles.value}>
                        {location.long}
                      </td>
                    </tr>
                  </table>
                </Accordion.Content>,
              ];
            })}
          </Accordion>
          <Button>Save</Button>
        </Segment>
      </div>
    );
  }
}
