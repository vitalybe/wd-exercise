import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Accordion } from "semantic-ui-react";
import { categories } from "../../model/categories";
import TopMenu from "../topMenu";
import CategoryView from "./categoryView";
import CategoryEdit from "./categoryEdit";
import CategoryDelete from "./categoryDelete";
import { observer } from "mobx-react";
import { Redirect, Route, withRouter } from "react-router-dom";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import classNames from "classnames"

@observer
class CategoriesListView extends Component {
  state = { selectedCategoryName: categories[0].name };

  handleItemClick = name => {
    this.setState({ selectedCategoryName: name });
  };

  render() {
    let pathname = this.props.location.pathname;
    let selectedCategoryName = this.state.selectedCategoryName;

    return (
      <div className="categories">
        <Route exact path={this.props.match.url} render={() => <Redirect to={this.props.match.url + "/view"} />} />

        <TopMenu />

        <Segment attached>
          <Accordion styled fluid>
            {categories.map(category => {
              return (
                <div key={category.name}>
                  <Accordion.Title
                    className={classNames({
                      "item-selected":
                        selectedCategoryName === category.name && pathname !== this.props.match.url + "/add",
                    })}
                    onClick={() => this.handleItemClick(category.name)}>
                    {category.name}
                  </Accordion.Title>
                  {(() => {
                    if (selectedCategoryName === category.name) {
                      switch (pathname) {
                        case this.props.match.url + "/view":
                          return <CategoryView category={category} />;

                        case this.props.match.url + "/edit":
                          return <CategoryEdit category={category} />;

                        case this.props.match.url + "/delete":
                          return [<CategoryView category={category} />, <CategoryDelete category={category} />];

                        default:
                          return null;
                      }
                    }
                  })()}
                </div>
              );
            })}

            {pathname === this.props.match.url + "/add"
              ? <div>
                  <Accordion styled>
                    <Accordion.Title className="item-selected">New category</Accordion.Title>
                    <CategoryEdit />
                  </Accordion>
                </div>
              : null}
          </Accordion>
        </Segment>
      </div>
    );
  }
}

export default withRouter(CategoriesListView);
