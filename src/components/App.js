import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import About from '../views/About'
import Home from '../views/Home'
import MyNavLink from '../components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <MyNavLink to="/about">About</MyNavLink>
                        </li>
                        <li>
                             <MyNavLink to="/home">Home</MyNavLink>
                        </li>
                    </ul>
                </nav>
                <section className="content">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                        <Redirect to="/about" />
                    </Switch>
                </section>
            </div>
        )
    }
}
