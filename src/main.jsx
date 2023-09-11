import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./Pizza.jsx";
import ConvertedHTML from "./ConvertedHTML.jsx";
import Bio from "./Bio.jsx";
import Avatar from "./Props1.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Avatar />
    <Bio />
    <ConvertedHTML />
    <Pizza />
  </React.StrictMode>
);
