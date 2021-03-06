import React, {Fragment} from 'react';

import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './../modules/scrollToTop';
import CSSTransitionGroup from "react-addons-css-transition-group";

import Homepage from "../pages/homepage/"
import pageNotFound from "../pages/404/"
import Header from "../components/header/"
import Footer from "../components/footer/"
import NewsmakersBlock from "../components/newsmakersBlock/"


class MainRouting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        // this.closeResendPopup = this.closeResendPopup.bind(this);
    }

    componentDidMount() {
      console.log("app is mounting")
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Fragment>
                            <CSSTransitionGroup transitionName="logn-popup"
                                                transitionEnter={true}
                                                transitionEnterTimeout={300}
                                                transitionLeave={true}
                                                transitionLeaveTimeout={300}>
                            </CSSTransitionGroup>
                            <Route path="/" component={Header}/>
                            <Switch>
                                <Route exact path="/" component={Homepage}/>
                                <Route component={pageNotFound}/>
                            </Switch>
                            <Route path="/" component={Footer}/>
                        </Fragment>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

// const mapStateToProps = (store) => {
//     return {
//         data: store,
//         user_id: store.user_id,
//     }
// };

// const mapDispatchToProps = dispatch => ({
//     addUserId: string => dispatch(addUserId(string)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MainRouting);
export default MainRouting;
