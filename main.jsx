import React from "react";
import { createRoot } from "react-dom/client";
import { add } from "./add.js";
import { Element } from "./element.jsx";

// Render your React component instead
const root = createRoot(document.getElementById("app"));

console.log("add(2,3) :>> ", add(2, 3));
root.render(<Element />);
