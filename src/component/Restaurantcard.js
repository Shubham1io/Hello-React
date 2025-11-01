import { CDN_LINK } from "../utils/constants";

const Restaurantcard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div 
        data-testid="rescard"  
        className="res-card m-4 p-4 w-[270px] bg-gray-300 h-[550px] hover:bg-gray-400  hover:w-[280px] rounded-xl shadow-lg">
            <img className="rounded-xl" src={CDN_LINK +
                cloudinaryImageId
            } />
            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};



// Higher order componet

export const WithPromotedLabel = (Restaurantcad) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        );
    };
};

export default Restaurantcard;