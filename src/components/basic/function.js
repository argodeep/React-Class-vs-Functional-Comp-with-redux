import React, { useEffect } from "react";
import * as API from "../../axios";
import { useSelector, useDispatch } from "react-redux";

export default function FunctionalComponent() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.userProfilesFunctional);

  function getProfiles() {
    dispatch(API.getUserProfilesFunctional());
  }

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="center">
      <p style={{ textAlign: "center" }}>{profiles.length} profiles found</p>
      {profiles.map((profile, index) => (
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
