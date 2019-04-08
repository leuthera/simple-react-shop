import React from "react";
import { withRouter } from "react-router-dom";

function NotFound({ location }) {
  return (
    <div
      style={{
        textAlign: "center",
        color: "red",
        fontSize: "20px",
        fontWeight: "bold"
      }}
    >
      <br />
      404 Route for {location.pathname} not found!
    </div>
  );
}

export default withRouter(NotFound);
