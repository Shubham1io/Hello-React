import Restaurantcard from "./Restaurantcard";
import reslist from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6077334&lng=77.0906644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // conditional rendring

    // if (listOfRestaurant.length === 0){
    //     return <Shimmer/>;
    // }

    return listOfRestaurant.length === 0 ? (<Shimmer />) :
        (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input
                            type="text" className="search-box"
                            value={searchText} onChange={(e) => {
                                setsearchText(e.target.value);
                            }}
                        />


                        <button className="search-btn"
                            onClick={() => {
                                const filteredItem = listOfRestaurant.filter((res)=>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setfilteredRestaurant(filteredItem);
                                
                            }}>search</button>
                    </div>
                    <button className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestaurant.filter((res) => (
                                res.info.avgRating > 4
                            ));
                            setfilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurant
                    </button>
                </div>



                <div className="res-container">
                    {
                        filteredRestaurant.map((restaurant) => (
                            <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                        ))
                    }
                </div>
            </div>
        );
};

export default Body;