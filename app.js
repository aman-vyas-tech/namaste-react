import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object not html ==> render on dom  ==> Html element.

const element = React.createElement("h1", {id: "heading"}, "This is H1 tag");

// JSX transpiled by Pracel(Babel inside) before reaches to JS engine.
const jsxElement = <h1 id="heading"> JSX Heading Element</h1>;
const jsxElement1 = <h1 id="heading"> JSX Heading Element 1</h1>;

const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(jsxElement);
root.render(jsxElement1);