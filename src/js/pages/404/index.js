import React from "react";

class pageNotFound extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Страница не найдена"
    }

    render() {
        return (
            <div>
                <h1>This is page 404</h1>
            </div>
        )
    }
};


export default pageNotFound;