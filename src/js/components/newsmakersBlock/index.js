import React from "react";
import Scrollbar from "react-scrollbars-custom";
import {Link} from "react-router-dom";

class NewsmakersBlock extends React.Component {

    render() {
        return (
            <div>
                <div className="newsmakers-section">
                    <h2>Newsmakers</h2>
                    <div className="short-newsmakers-block">
                        <img src="img/JMP_Bristol_Rugby_v_Bedford_Blues_RT0307.jpg" alt="news photo"/>
                        <div className="list-news">
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-newsmakers-block">
                        <Scrollbar className="test-scroll list-news">
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time-logo.png" alt=""/>2h<span>Rugby Union</span></p>
                            </div>
                        </Scrollbar>
                    </div>
                </div>
            </div>
        )
    }
};


export default NewsmakersBlock;