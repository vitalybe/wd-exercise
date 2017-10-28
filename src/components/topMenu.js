import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

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

  modifySelection(name) {
    this.setState({ activeItem: name });
    if (this.props.onSelectionChanged) {
      this.props.onSelectionChanged(name);
    }
  }

  handleItemClick = name => {
    this.modifySelection(name);
  };

  componentWillMount() {
    this.modifySelection("edit");
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu attached="top">
        <Menu.Item
          style={{ ...(activeItem === "view" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("view")}>
          View
        </Menu.Item>
        <Menu.Item
          style={{ ...(activeItem === "edit" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("edit")}>
          Edit
        </Menu.Item>
        <Menu.Item
          style={{ ...(activeItem === "add" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("add")}>
          Add
        </Menu.Item>
        <Menu.Item
          style={{ ...(activeItem === "delete" ? styles.itemSelected : null) }}
          onClick={() => this.handleItemClick("delete")}>
          Delete
        </Menu.Item>
      </Menu>
    );
  }
}

TopMenu.propTypes = {
  onSelectionChanged: PropTypes.func.isRequired,
};
