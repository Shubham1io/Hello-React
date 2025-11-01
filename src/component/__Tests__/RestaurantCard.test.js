import { render,screen } from "@testing-library/react";
import Restaurantcard from "../Restaurantcard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should rendered restaurant component with props data" ,()=>{
    render(<Restaurantcard resData={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});