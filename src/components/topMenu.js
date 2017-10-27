import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Segment, Accordion, Input, Button } from "semantic-ui-react";

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
  },
};

export default class TopMenu extends Component {

  handleItemClick = (name, callback) => {
    this.setState({ activeItem: name });
    if (callback) {
      callback();
    }
  };

  constructor() {
    super();
    this.state = { activeItem: "view" };
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu attached="top">
        <Menu.Item
          style={{ ...(activeItem === "view" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("view", this.props.onView)}>
          View
        </Menu.Item>
        <Menu.Item
          style={{ ...(activeItem === "edit" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("edit", this.props.onEdit)}>
          Edit
        </Menu.Item>
        <Menu.Item
          style={{ ...(activeItem === "add" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("add", this.props.onAdd)}>
          Add
        </Menu.Item>
        <Menu.Item
          style={{ ...(activeItem === "delete" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("delete", this.props.onDelete)}>
          Delete
        </Menu.Item>
      </Menu>
    );
  }
}

TopMenu.propTypes = {
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};
