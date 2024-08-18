import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header  from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/error";

const AppLayout = ()=> {
  console.log(<Body/>)
    return (
        <div id="app" className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(<RouterProvider router = {appRouter} />);

