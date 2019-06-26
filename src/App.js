import React from 'react'
import './App.css'

import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

import Menu from './components/menu'
import Favs from './components/favs'
import About from './components/about'

const App = ({
  location
}) => {
  console.log(location.key)

  return (
    <div className="app">
      <Menu />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="swipe"
          timeout={500}
        >
          <Switch>
            <Route
              exact
              path="/"
              component={Favs}
            />
            <Route
              path="/about"
              component={About}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(App)
