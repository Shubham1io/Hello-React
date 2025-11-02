import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact_us from "./component/Contact _us";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";
//import Grocery from "./component/Grocery";



const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {


    const [userName, setUserName] = useState();

    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Shubham",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="App">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>

        </Provider>
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
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}>
                    <Grocery />
                </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />,
    },

],
    {
        basename: "/Namaste-Delights", // 👈 important for GitHub Pages
    }
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
