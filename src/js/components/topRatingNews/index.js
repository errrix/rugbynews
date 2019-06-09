import React from "react";
import {Link} from "react-router-dom";

class TopRatingNews extends React.Component {

    render() {
        return (
            <div>
                <div className="top-rating-news-block">
                    <div className="top-rating-news-block__title">
                        <h4>TOP Rating News</h4>
                    </div>
                    <div className="top-rating-news-block__list">
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default TopRatingNews;