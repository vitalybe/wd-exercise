import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import { Accordion } from "semantic-ui-react";
import LocationView from "./locationView";
import LocationEdit from "./locationEdit";
import LocationDelete from "./locationDelete";
import { observer } from "mobx-react";
import { Redirect, Route, withRouter } from "react-router-dom";

@observer
class LocationsListView extends Component {
  handleItemClick = name => {
    navigator.vibrate(200);
    this.props.onSelectedLocationChange(name);
  };

  render() {
    let pathname = this.props.location.pathname;
    let selectedLocationName = this.props.selectedLocationName;

    return (
      <div className="list">
        <Route exact path={this.props.match.url} render={() => <Redirect to={this.props.match.url + "/view"} />} />

        {this.props.locations.length > 0
          ? <Accordion styled fluid>
              {this.props.locations.map(location => {
                return (
                  <div key={location.name}>
                    <Accordion.Title
                      className={classNames({
                        "item-selected":
                          selectedLocationName === location.name && pathname !== this.props.match.url + "/add",
                      })}
                      onClick={() => this.handleItemClick(location.name)}>
                      {location.name}
                    </Accordion.Title>
                    {(() => {
                      if (selectedLocationName === location.name) {
                        switch (pathname) {
                          case this.props.match.url + "/view":
                            return <LocationView location={location} />;

                          case this.props.match.url + "/edit":
                            return <LocationEdit location={location} />;

                          case this.props.match.url + "/delete":
                            return [<LocationView location={location} />, <LocationDelete location={location} />];

                          default:
                            return null;
                        }
                      }
                    })()}
                  </div>
                );
              })}
            </Accordion>
          : <div style={{ border: 0 }}>No locations</div>}
      </div>
    );
  }
}

LocationsListView.propTypes = {
  locations: PropTypes.array.isRequired,
  selectedLocationName: PropTypes.string.isRequired,

  onSelectedLocationChange: PropTypes.func.isRequired,
};

export default withRouter(LocationsListView);
