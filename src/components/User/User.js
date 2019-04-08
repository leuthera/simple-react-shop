import React from "react";
import store from "../../services/Redux/Store/store";

function User() {
  return (
    <div>
      {store.getState().map(person =>
        Object.keys(person).map(key => (
          <p>
            {key} {person[key]}
          </p>
        ))
      )}
    </div>
  );
}

export default User;
