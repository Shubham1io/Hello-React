import Restaurantcard from "./Restaurantcard";
import reslist from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const[listOfRestaurant,setlistOfRestaurant] = useState(reslist);

    return (
        <div className="body">
            <div className="filter">
                <button className="fiter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) => (
                            res.info.avgRating > 4.5
                        ));
                        setlistOfRestaurant(filteredList);
                    }}>
                    Top Rated Restaurant
                </button>
            </div>



            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;