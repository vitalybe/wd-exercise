import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Menu, Segment, Accordion, Input, Button } from "semantic-ui-react";
import TopMenu from "./topMenu";

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
    this.state = {
      locations: [
        {
          category: "cat1",
          name: "name1",
          address: "address1",
          lat: 2.1221,
          long: 3.2121,
        },
        {
          category: "cat2",
          name: "name2",
          address: "address2",
          lat: 2.1221,
          long: 3.2121,
        },
        {
          category: "cat3",
          name: "name3",
          address: "address3",
          lat: 2.1221,
          long: 3.2121,
        },
      ],
    };
  }

  component;

  render() {
    let { activeItem } = this.state;
    if (!activeItem && this.state.locations.length) {
      activeItem = this.state.locations[0].name;
    }

    return (
      <div>
        <TopMenu />

        <Segment attached>
          <Accordion styled style={styles.items}>
            {this.state.locations.map(location => {
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
                        {location.category}
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