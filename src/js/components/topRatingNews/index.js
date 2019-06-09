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
                                <p>
                                    <img src="img/star_icon.png" alt="star_icon"/>
                                    <img src="img/time_icon.png" alt="time_icon"/>2h<span>Rugby Union</span>
                                    <img src="img/chat-bubble_color.png" alt="chat-bubble_color"/><span>27</span>
                                </p>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <p>
                                    <img src="img/star_icon.png" alt="star_icon"/>
                                    <img src="img/time_icon.png" alt="time_icon"/>2h<span>Rugby Union</span>
                                    <img src="img/chat-bubble_color.png" alt="chat-bubble_color"/><span>27</span>
                                </p>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <p>
                                    <img src="img/star_icon.png" alt="star_icon"/>
                                    <img src="img/time_icon.png" alt="time_icon"/>2h<span>Rugby Union</span>
                                    <img src="img/chat-bubble_color.png" alt="chat-bubble_color"/><span>27</span>
                                </p>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <p>
                                    <img src="img/star_icon.png" alt="star_icon"/>
                                    <img src="img/time_icon.png" alt="time_icon"/>2h<span>Rugby Union</span>
                                    <img src="img/chat-bubble_color.png" alt="chat-bubble_color"/><span>27</span>
                                </p>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <p>
                                    <img src="img/star_icon.png" alt="star_icon"/>
                                    <img src="img/time_icon.png" alt="time_icon"/>2h<span>Rugby Union</span>
                                    <img src="img/chat-bubble_color.png" alt="chat-bubble_color"/><span>27</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default TopRatingNews;