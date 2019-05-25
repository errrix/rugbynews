import React from "react";
import {Link, Redirect} from 'react-router-dom';

class Header extends React.Component {

    toggleMobMenu() {
        document.querySelector('.navigation-side-mobile').classList.toggle('active-nav-mobile');
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="header-desktop">
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
                                        <li className="submenu-hover">
                                            <Link to='/'>NEWS</Link>
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
                                        <Link to='/' className="header-search-link"><img src="img/search-icon.png"
                                                                                         alt="search"/></Link>
                                        <button>
                                            Reg /&nbsp;<span>LogIn</span><img src="img/acc-user.png" alt="user"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-device">
                        <div className="container">
                            <div className="header-device-wrapper">
                                <div className="header__navToggle" onClick={this.toggleMobMenu}>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="header-logo">
                                    <Link to='/'>
                                        <img src="img/rugbynews-logo.png" alt="logo"/>
                                    </Link>
                                </div>
                                <div className="header-search-section">
                                    <Link to='/' className="header-search-link">
                                        <img src="img/search-icon.png" alt="search"/>
                                    </Link>
                                </div>
                                <div className="navigation-side-mobile">
                                    <ul className="header-nav-menu">
                                        <li className="submenu-hover">NEWS
                                            {/*<Link to='/'>NEWS</Link>*/}
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
                                        <li>
                                            <Link to='/'>PARTNERSHIP</Link>
                                        </li>
                                    </ul>
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