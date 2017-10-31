import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import classNames from "classnames"

class TopMenu extends Component {
  render() {
    const matchUrl = this.props.match.url;

    return (
      <Menu attached="top">
        <Menu.Item
          className={classNames({ "item-selected": this.props.location.pathname === matchUrl + "/view" })}
          onClick={() => this.props.history.push(matchUrl + "/view")}>
          View
        </Menu.Item>
        <Menu.Item
          className={classNames({ "item-selected": this.props.location.pathname === matchUrl + "/edit" })}
          onClick={() => this.props.history.push(matchUrl + "/edit")}>
          Edit
        </Menu.Item>
        <Menu.Item
          className={classNames({ "item-selected": this.props.location.pathname === matchUrl + "/add" })}
          onClick={() => this.props.history.push(matchUrl + "/add")}>
          Add
        </Menu.Item>
        <Menu.Item
          className={classNames({ "item-selected": this.props.location.pathname === matchUrl + "/delete" })}
          onClick={() => this.props.history.push(matchUrl + "/delete")}>
          Delete
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(TopMenu);
