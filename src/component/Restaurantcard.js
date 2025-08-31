import {CDN_LINK} from "../utils/constants";

const Restaurantcard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.info;
    return (
        <div className="res-card">
            <img src={CDN_LINK +
                cloudinaryImageId
            } />
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default Restaurantcard;