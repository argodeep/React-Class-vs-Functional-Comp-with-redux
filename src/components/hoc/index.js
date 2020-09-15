import React from "react";

export default function HOCWrapper(WrappedComponent, type) {
  return function ({ data }) {
    if (data.length === 0) {
      return (
        <>
          <h3>{type}</h3>
          <p style={{ textAlign: "center" }}>Fetching Data...</p>
        </>
      );
    }

    return (
      <>
        <h3>{type}</h3>
        <WrappedComponent profiles={data} />
      </>
    );
  };
}
