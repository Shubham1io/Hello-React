import Restaurantcard from "./Restaurantcard";
import reslist from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    reslist.map((restaurant) => (
                    <Restaurantcard key={restaurant.info.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;