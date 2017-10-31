import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion, Input, Button } from "semantic-ui-react";
import { Category, categories } from "../../model/categories";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class CategoryEdit extends Component {
  constructor(props) {
    super(props);

    if (this.props.category) {
      this.state = {
        name: this.props.category.name,

        modified: false,
      };
    } else {
      this.state = {
        name: "",

        modified: false,
      };
    }
  }

  modifyValue = (valueName, newValue) => {
    this.setState({ [valueName]: newValue, modified: true });
  };

  fillCategoryFromInput(category) {
    category.name = this.state.name;
  }

  onUpdate = () => {
    this.fillCategoryFromInput(this.props.category);

    this.setState({ modified: false });
  };

  onCreate = () => {
    let category = new Category();
    this.fillCategoryFromInput(category);
    categories.push(category);

    this.setState({ modified: false });
  };

  render() {
    return (
      <Accordion.Content active={true}>
        <table>
          <tbody>
            <tr>
              <td style={styles.kind}>Name: </td>
              <td style={styles.value}>
                <Input value={this.state.name} onChange={(e, data) => this.modifyValue("name", data.value)} />
              </td>
            </tr>
          </tbody>
        </table>
        {this.props.category
          ? <Button onClick={this.onUpdate} disabled={!this.state.modified}>
              Update
            </Button>
          : <Button onClick={this.onCreate} disabled={!this.state.modified}>
              Create
            </Button>}
      </Accordion.Content>
    );
  }
}

CategoryEdit.propTypes = {
  category: PropTypes.object,
};
