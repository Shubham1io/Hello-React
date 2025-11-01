import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});


it("should render the Body component with search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))

        const searchBtn = screen.getAllByRole("button", {name: "Search"})

        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, {target: {value: "burger"}})
        fireEvent.click(searchBtn);

        const cards = screen.getAllByTestId("rescard");

        expect(cards.length).toBe(4);

});