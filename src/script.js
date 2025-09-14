import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact_us from "./component/Contact _us";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";




const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/contact",
                element: <Contact_us />,
            }
        ],
        errorElement: <Error />,
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
