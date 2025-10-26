import React from "react";

class UsersClass extends React.Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }

        console.log(this.props.name + "child constructor is called");
    };

    componentDidMount(){
        console.log(this.props.name + "child component is called");
    };
    render(){
        console.log(this.props.name +"child render is called");
        const {name, location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="User-card">
            <h1>count: {count}</h1>
            <h1>count: {count2}</h1>
            <button onClick={
                ()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    });
                }
            }>click </button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact:hkjn@bn.com </h3>
        </div>
        );
    };
};

export default UsersClass;