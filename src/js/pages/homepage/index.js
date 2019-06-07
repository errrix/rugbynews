import React from "react";
import NewsmakersBlock from "../../components/newsmakersBlock/"

class Homepage extends React.Component {

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <div className="hp-main-block">
                    <div className="container">
                        <div className="main-section-wrapper">
                            <div className="news-section">
                                <NewsmakersBlock/>
                            </div>
                            <div className="table-right-section">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default Homepage;