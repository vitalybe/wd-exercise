import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Menu, Segment, Accordion, Input, Button } from "semantic-ui-react";
import { categories } from "../../model/categories"

const styles = {
  items: {
    flex: 1,
    width: "100%",
  },
  kind: {
    fontWeight: "bold",
  }
};

export default class CategoriesListView extends Component {
  state = { activeItem: "categories" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  constructor() {
    super();
    this.setState({})
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}
