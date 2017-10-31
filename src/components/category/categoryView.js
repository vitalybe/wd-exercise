import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion } from "semantic-ui-react";

const styles = {
  kind: {
    fontWeight: "bold",
  },
  value: {},
};

export default class CategoryView extends Component {
  render() {
    return (
      <Accordion.Content active={true}>
        <table>
          <tbody>
            <tr>
              <td style={styles.kind}>Name: </td>
              <td style={styles.value}>
                {this.props.category.name}
              </td>
            </tr>
          </tbody>
        </table>
      </Accordion.Content>
    );
  }
}

CategoryView.propTypes = {
  category: PropTypes.object.isRequired,
};
