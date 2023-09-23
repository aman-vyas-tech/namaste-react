import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent" }, 
[React.createElement("div", {id: "child" },
[React.createElement("h1", {id: "heading" }, "Aman - Nested Heading"),
React.createElement("h1", {id: "heading1" }, "Nested Heading 1")]),
React.createElement("div", {id: "child" },
[React.createElement("h1", {id: "heading" }, "Nested Heading"),
React.createElement("h1", {id: "heading1" }, "Nested Heading 1123")])]);


const heading = React.createElement("h1", {id: 'heading2'}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById('id'));
// root.render(heading);
root.render(parent);
console.log(heading, root,parent);