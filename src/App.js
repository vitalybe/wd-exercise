import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Icon, Menu, Segment, Accordion, Input, Button } from "semantic-ui-react";

const styles = {
  container: {
    margin: "auto",
    width: "50em",
    marginTop: "3em",
  },
  menuBottom: {
    marginLeft: "-1px",
  },
  items: {
    flex: 1,
    width: "100%",
  },
  kind: {
    fontWeight: "bold",
  }
};

class App extends Component {
  state = { activeItem: "categories" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={styles.container}>
        <Menu attached="top">
          <Menu.Item>View</Menu.Item>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Add</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
        </Menu>

        <Segment attached>
          <Accordion styled style={styles.items}>
            <Accordion.Title active={true} index={0}>
              Category C
            </Accordion.Title>
            <Accordion.Content active={true}>
              <table>
                <tr>
                  <td style={styles.kind}>Category: </td>
                  <td style={styles.value}>Aaa</td>
                </tr>
                <tr>
                  <td style={styles.kind}>Name: </td>
                  <td style={styles.value}>Category C</td>
                </tr>
              </table>
            </Accordion.Content>
            <Accordion styled style={styles.items}>
              <Accordion.Title active={false} index={0}>
                Collapsed
              </Accordion.Title>
              <Accordion.Content active={false}>
                <table>
                  <tr>
                    <td style={styles.kind}>Category: </td>
                    <td style={styles.value}>Aaa</td>
                  </tr>
                  <tr>
                    <td style={styles.kind}>Name: </td>
                    <td style={styles.value}>Category C</td>
                  </tr>
                </table>
              </Accordion.Content>
              <Accordion.Title active={true} index={0}>
                Category edit
              </Accordion.Title>
              <Accordion.Content active={true}>
                <table>
                  <tr>
                    <td style={styles.kind}>Category: </td>
                    <td style={styles.value}><Input/></td>
                  </tr>
                  <tr>
                    <td style={styles.kind}>Name: </td>
                    <td style={styles.value}><Input/></td>
                  </tr>
                </table>
                <Button>Save</Button>
              </Accordion.Content>
            </Accordion>

          </Accordion>
        </Segment>

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
