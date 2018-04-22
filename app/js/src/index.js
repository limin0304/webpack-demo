'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, HashRouter } from 'react-router';
import '../../scss/index.scss';
import "../../scss/aw.scss";
import "../../fonts/demo.css";
import "../../fonts/iconfont.css";
import A from "./a.js";
import B from "./b.js";
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
            <ul>
                <li><Link to="/a">About</Link></li>
                <li><Link to="/b">Inbox</Link></li>
            </ul>
                {this.props.children}
            </div> 
        );
    } 
}

ReactDom.render(
    <HashRouter>
        <Route path="/" component={App}>
            <Route path="a" component={A} />
            <Route path="b" component={B} />
        </Route>
    </HashRouter>
    , document.getElementById('root'));