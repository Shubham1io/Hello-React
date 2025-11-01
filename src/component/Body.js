import Restaurantcard, { WithPromotedLabel } from "./Restaurantcard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/userContext";


const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");



    const RestaurantcardPromoted = WithPromotedLabel(Restaurantcard);


    console.log(listOfRestaurant);



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

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like your are offline!! please check your internet connection;
            </h1>
        );


    const {loggedInUser,setUserName} = useContext(UserContext);



    return listOfRestaurant.length === 0 ? (<Shimmer />) :
        (
            <div className="body">
                <div className="filter flex items-center">
                    <div className="search p-4 m-4">
                        <input
                            type="text" 
                            data-testid="searchInput"
                            className="border border-solid border-black hover:shadow-lg"
                            value={searchText} onChange={(e) => {
                                setsearchText(e.target.value);
                            }}
                        />
                        <button className="px-4 py-1 m-4 bg-gray-300 rounded-lg hover:shadow-lg"
                            onClick={() => {
                                const filteredItem = listOfRestaurant.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setfilteredRestaurant(filteredItem);

                            }}>search</button>
                    </div>
                    <div className="p-4 m-4">
                        <button className="px-2 py-1 bg-gray-300 rounded-lg hover:shadow-lg"
                            onClick={() => {
                                const filteredList = listOfRestaurant.filter((res) => (
                                    res.info.avgRating > 4
                                ));
                                setfilteredRestaurant(filteredList);
                            }}>
                            Top Rated Restaurant
                        </button>
                    </div>
                    <div className="p-4 m-4">
                        <label className="px-2">User Name</label>
                        <input className="border border-black px-2" 
                        value={loggedInUser}
                        onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                </div>



                <div className="res-container flex flex-wrap">
                    {
                        filteredRestaurant.map((restaurant) => (
                            <Link key={restaurant.info.id}
                                to={"/restaurants/" + restaurant.info.id}
                            >

                            {restaurant.info.avgRating > 4.3 ? (<RestaurantcardPromoted resData={restaurant}/>
                              ): (
                               <Restaurantcard resData={restaurant} />
                              )}
                                
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
};

export default Body;