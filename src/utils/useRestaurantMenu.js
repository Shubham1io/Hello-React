import { useState, useEffect } from "react";
import { Menu_Link } from "./constants";
import Error from "../component/Error";

const useRestaurantMenu = (resId) => {

    const [resInfo, SetresInfo] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {

        fetchMenu();

    }, []);

    const fetchMenu = async () => {
        setloading(true);
        seterror(null);
        try {
            const data = await fetch(Menu_Link + resId);
            if (!data.ok) throw new Error("Network response was not OK");
            const json = await data.json();
            SetresInfo(json.data);
            setloading(false);
        } catch (err) {

            setTimeout(() => {
                seterror(" Server error.....!!!! Or Check Internet Connection ");
                setloading(false);
            }, 5000);
        }

    };

    return { resInfo, loading, error };
};

export default useRestaurantMenu;