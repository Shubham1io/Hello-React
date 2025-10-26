import UserContext from "../utils/userContext";
import Users from "./Users";
import UsersClass from "./UsersClass";
import React from "react";



class About extends React.Component {

    constructor(props){
        super(props);
        console.log("parent constructor is called");
    }

    componentDidMount(){
        console.log("parent component is called");
    };

    render() {
        console.log("parent render is called");
        return (
            <div className="text-center">
                <h1 className="text-lg py-2 pb-10">About Us</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => 
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h3 className="py-2">This is about us page</h3>
                {/* <Users name={"Shubham (functional)"} location={"Delhi"} /> */}

                <UsersClass name={"first (class)"} location={"Delhi"} />
            </div>
        );
    }
}
export default About;