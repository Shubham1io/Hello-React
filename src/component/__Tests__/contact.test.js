import { render, screen } from "@testing-library/react";
import Contact_us from "../Contact _us";
import "@testing-library/jest-dom";


describe("Contact Us page test cases", () => {
    it("Should load contact us component ", () => {
        render(<Contact_us />);

        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();

    });

    it("Should load button inside contact us component ", () => {
        render(<Contact_us />);

        const button = screen.getByText("Submit");

        //Assertion
        expect(button).toBeInTheDocument();

    });


    it("Should load 2 inputboxes inside contact us component ", () => {
        render(<Contact_us />);

        //querying
        const inputBoxes = screen.getAllByRole("textbox");
        //console.log(inputBoxes);

        //Assertion
        expect(inputBoxes.length).toBe(2);

    });

});


