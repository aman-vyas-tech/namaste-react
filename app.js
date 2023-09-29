import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object not html ==> render on dom  ==> Html element.

// const element = React.createElement("h1", {id: "heading"}, "This is H1 tag");

// JSX transpiled by Pracel(Babel inside) before reaches to JS engine.
// const jsxElement = <h1 id="heading"> JSX Heading Element</h1>;
// const title = (
//   <h1 id="heading" className="head">
//     JSX Heading Element 1
//   </h1>
// );

const TitleComponent = () => (
    <div id="title">
        <h1 id="title">React title</h1>
    </div>
);

const Subject = () => (
    <div id="subject">
        <p>This ia  an article on component compisition where one component nested into anoter</p>
    </div>
);

//React Func component which return jsx and here nested component is called component composition.
const HeadingComponent = () => (
<div id="container">
    <TitleComponent/>
    <h1 id="heading" className="head">JSX Heading Element 1</h1>
    <Subject/>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(<HeadingComponent />);
