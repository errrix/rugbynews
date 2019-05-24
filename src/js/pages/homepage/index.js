import React from "react";

class Homepage extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Главная"
    }

    render() {
        return (
            <div>

               <h1>This is homepage</h1>
            </div>
        )
    }
};


export default Homepage;