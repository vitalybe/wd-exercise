import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "semantic-ui-react";
import { locations } from "../../model/locations";

export default class LocationDelete extends Component {
  onDelete = () => {
    let foundIndex = locations.findIndex(location => location.name === this.props.location.name);
    locations.splice(foundIndex, 1)
  };

  render() {
    return (
      <div>
        <Button onClick={this.onDelete}>
          Delete {this.props.location.name}
        </Button>
      </div>
    );
  }
}

LocationDelete.propTypes = {
  location: PropTypes.instanceOf(Location).isRequired,
};
