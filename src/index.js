//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favorite Fish</h1>
    <ul>
      <li>Hilsha</li>
      <li>Chrimp</li>
      <li>Coral</li>
    </ul>
  </div>,
  document.querySelector("#root")
);
