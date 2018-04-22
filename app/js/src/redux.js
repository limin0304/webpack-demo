'use strict';
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import "../../scss/a.scss";
import "../../fonts/demo.css";
import "../../fonts/iconfont.css";
class ShowText extends Component {
    render() {
        return ( < div > I am here ! < /div> ); 
    }
}
render( < ShowText / > , document.getElementById('root'));

