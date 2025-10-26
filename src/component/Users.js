import { useState } from "react";


const Users = ({name,location})=>{

    const [count] = useState(0);
    const [count2] = useState(2);

    return(
        <div className="User-card">
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact:hkjn@bn.com </h3>
        </div>
    );
};

export default Users;