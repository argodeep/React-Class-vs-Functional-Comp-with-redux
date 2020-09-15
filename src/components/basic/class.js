import React, { Component } from "react";
import { connect } from "react-redux";
import * as API from "../../axios";

class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles() {
    this.props.getProfiles();
  }

  render() {
    return (
      <div className="center">
        <p style={{ textAlign: "center" }}>
          {this.props.profiles.length} profiles found
        </p>
        {this.props.profiles.map((profile, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            <span>#{index + 1}</span>
            <span style={{ minWidth: 200 }}>
              {profile.name.title} {profile.name.first} {profile.name.last}
            </span>
            <span>{profile.phone}</span>
          </div>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProfiles: () => {
      dispatch(API.getUserProfilesClass());
    }
  };
}

function mapStateToProps(state) {
  return {
    profiles: state.userProfilesClass
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassBasedComponent);
