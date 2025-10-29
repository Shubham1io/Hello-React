import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";



it("should render Header component with login button", () => {
    render(

        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    const loginButton = screen.getAllByRole("button", { name: login });

    

    //Assertion
    expect(loginButton).toBeInDocuments();
});


it("should render Header component with cart item 0", () => {
    render(

        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    const cartItems = screen.getByText("Cart(0)");

    expect(cartItems).toBeInDocuments();
});


it("should render Header component with cart item ", () => {
    render(

        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    const cartItems = screen.getByText(/cart/);

    expect(cartItems).toBeInDocuments();
});


it("should change login button to logout on click ", () => {
    render(

        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    
    const loginButton = screen.getByRole("button", { name: login });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: logout});

    expect(logoutButton).toBeInDocuments();
});