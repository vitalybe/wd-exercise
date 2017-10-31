import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import {withRouter} from "react-router-dom";

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

class TopMenu extends Component {
  render() {
    const matchUrl = this.props.match.url;

    return (
      <Menu attached="top">
        <Menu.Item
          style={{ ...(this.props.location.pathname === matchUrl + "/view" ? styles.itemSelected : null) }}
          onClick={() => this.props.history.push(matchUrl + "/view")}>
          View
        </Menu.Item>
        <Menu.Item
          style={{ ...(this.props.location.pathname === matchUrl + "/edit" ? styles.itemSelected : null) }}
          onClick={() => this.props.history.push(matchUrl + "/edit")}>
          Edit
        </Menu.Item>
        <Menu.Item
          style={{ ...(this.props.location.pathname === matchUrl + "/add" ? styles.itemSelected : null) }}
          onClick={() => this.props.history.push(matchUrl + "/add")}>
          Add
        </Menu.Item>
        <Menu.Item
          style={{ ...(this.props.location.pathname === matchUrl + "/delete" ? styles.itemSelected : null) }}
          onClick={() => this.props.history.push(matchUrl + "/delete")}>
          Delete
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(TopMenu)
