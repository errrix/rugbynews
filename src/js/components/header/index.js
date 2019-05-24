import React from "react";
import {Link, Redirect} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="header">
                    <div className="header-top-section">
                        <div className="container">

                        </div>
                    </div>
                    <div className="header-bottom-section">
                        <div className="container">
                            <div className="header-bottom-section-wrapper">
                                <div className="header-logo">
                                    <Link to='/'>
                                        <img src="img/rugbynews-logo.png" alt="logo"/>
                                    </Link>
                                </div>
                                <ul className="header-nav-menu">
                                    <li className="submenu-hover"><a href="#">NEWS</a>
                                        <ul className="submenu-list">
                                            <li>
                                                <Link to='/'>All News</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>Newsmker</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>Tournaments</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>Sevens</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>Columns</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>Clubs</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>Unions</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/'>FIXTURES</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>RESULTS</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>TABLES</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>VIDEO</Link>
                                    </li>
                                </ul>
                                <div className="header-search-login-section">
                                    <Link to='/' className="header-search-link"><img src="img/search-icon.png" alt="search"/></Link>
                                    <button>
                                        Reg /<span>LogIn</span><img src="img/acc-user.png" alt="user"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};


export default Header;