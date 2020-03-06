import React, { Component } from 'react';
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom';
import history from '../history';
import SearchBar from './SearchBar';
import Yelp from './Yelp';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <BrowserRouter>
                        <div>
                            <Switch>
                                <Route path="/" exact component={SearchBar} />
                                <Route path="/yelp" component={Yelp} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </Router>
            </div>
        )
    }
}

export default App;
