import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { gif_Link } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {


    const { resId } = useParams();

    const { resInfo, loading, error } = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(0);


    if (loading) return <Shimmer />;
    if (error) return <div className=" m-2 p-2 flex-col items-center text-center font-bold font-serif text-4xl bg-red-400 ">
        {error} <div className="mx-52 px-72 py-9"> <img src={gif_Link} /> </div>
    </div>

    if (!resInfo || !resInfo.cards || !resInfo.cards[2]?.card?.card?.info) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwo } = resInfo.cards[2].card.card.info;

    const itemCardsA = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const itemCardsB = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    const itemCards = itemCardsA || itemCardsB || [];

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="menu font-bold text-2xl my-6" >
            <h1>{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwo}</p>

            {categories.map((category, index) => {
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setshowIndex = {(()=>{setshowIndex(index)})}
                />
            })}

        </div >
    );
};

export default RestaurantMenu;