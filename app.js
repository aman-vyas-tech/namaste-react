import React from "react";
import ReactDOM from "react-dom/client";

/**
* Header
    Logo
    Nav Bar
* Body
    Search
    Restaurent Container
    Restaurent Card
* Footer
    Copyright
    Address
    Contact 
*/

const Header = ()=> {
    return (
        <div className="header">
            <div className="logo-cotainer">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarbFGOA8xl_IGcaB291JF16ZfgqEnfC5OxZn9xRFS&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "pink"
}

const RestaurentCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <h3>Radha Krishna</h3>
        </div>
    )
}

const Body = ()=> {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurentCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return (
        <div id="app" className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(<AppLayout />);
