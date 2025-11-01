import { act, render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"



it("should Load Restaurant Menu component", async()=>{
    await act(async () => render(<RestaurantMenu />));
})