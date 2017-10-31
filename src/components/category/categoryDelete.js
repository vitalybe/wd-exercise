import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "semantic-ui-react";
import {Category, categories} from "../../model/categories";

export default class CategoryDelete extends Component {
  onDelete = () => {
    let foundIndex = categories.findIndex(category => category.name === this.props.category.name);
    categories.splice(foundIndex, 1)
  };

  render() {
    return (
      <div>
        <Button onClick={this.onDelete}>
          Delete {this.props.category.name}
        </Button>
      </div>
    );
  }
}

CategoryDelete.propTypes = {
  category: PropTypes.instanceOf(Category).isRequired,
};
