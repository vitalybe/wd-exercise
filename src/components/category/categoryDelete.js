import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "semantic-ui-react";
import { categories } from "../../model/categories";
import { locations } from "../../model/locations";

export default class CategoryDelete extends Component {
  onDelete = () => {
    let foundIndex = categories.findIndex(category => category.name === this.props.category.name);

    let categoryLocationsIndexes = locations
      .filter(location => location.category === this.props.category)
      .map((location, index) => index);

    for (let i = categoryLocationsIndexes.length - 1; i >= 0; i--) {
      locations.splice(categoryLocationsIndexes[i], 1);
    }

    categories.splice(foundIndex, 1);
  };

  render() {
    return (
      <div>
        <Button onClick={this.onDelete} disabled={categories.length === 1}>
          Delete {this.props.category.name}
        </Button>
      </div>
    );
  }
}

CategoryDelete.propTypes = {
  category: PropTypes.object.isRequired,
};
