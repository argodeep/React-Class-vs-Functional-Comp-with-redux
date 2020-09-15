import React from "react";

export default function HOCList({ profiles }) {

  return (
    <div className="center">
      <p style={{ textAlign: "center", textDecoration: 'underline' }}>{profiles.length} profiles found</p>
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
