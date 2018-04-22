/*
* @Author: Rosen
* @Date:   2018-01-13 11:27:21
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-05 14:02:20
*/

import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import Home from 'page/home/index.jsx'
import Headerview from 'component/headerview/index.jsx'

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Headerview/>
                123123123
                <Home/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
