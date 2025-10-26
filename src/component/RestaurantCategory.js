import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setshowIndex }) => {
   
    
    const clickHandler = ()=>{
        setshowIndex();
    };
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            {/* {header} */}
            <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
                <span className="font-bold text-lg">
                    {data.title} ({data.itemcards.length})
                </span>
                <span>⬇️</span>
                
            </div>
            {showItems && <ItemList items={data.itemcards}/>}
            </div>
        </div>

    );
};

export default RestaurantCategory;