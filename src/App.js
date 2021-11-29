/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { Component } from 'react';
import Menu from './component/Menu/Menu';
import routes from '../src/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="app  container-fluid">
                        <Menu />
                    </div>
                    <div className="main__app container-fluid">
                        <Switch>
                        {this.showContextMenu(routes)}
                        </Switch>
                      
                    </div>
                </div>
            </Router>
        );
    }
    showContextMenu=(routes)=>{
        var result = routes.map((route, index) => {
                console.log(route)
                return(
                    <Route
                        key= {index}
                        path ={route.path}
                        exact ={routes.exact}
                    >
                        {route.main}
                    </Route>
    
                );
            });
        return <Switch>
            {result}
        </Switch>
    
    }

}



