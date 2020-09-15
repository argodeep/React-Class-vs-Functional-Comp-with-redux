import React, { useEffect } from "react";
import * as API from "../../axios";
import { useSelector, useDispatch } from "react-redux";
import HOCWrapper from "../hoc";
import HOCList from "../hoc/list";

export default function FunctionalComponent() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.userProfilesFunctional);
  const List = HOCWrapper(HOCList, 'Functional Component');

  function getProfiles() {
    dispatch(API.getUserProfilesFunctional());
  }

  useEffect(() => {
    getProfiles();
  }, []);

  return <List data={profiles} />;
}
