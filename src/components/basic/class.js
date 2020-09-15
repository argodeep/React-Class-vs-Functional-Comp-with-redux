import React, { Component } from "react";
import { connect } from "react-redux";
import * as API from "../../axios";
import HOCWrapper from "../hoc";
import HOCList from "../hoc/list";

const List = HOCWrapper(HOCList, 'Class-based Component');

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
    return <List data={this.props.profiles} />;
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
