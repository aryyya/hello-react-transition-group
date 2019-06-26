import React from 'react'
import './App.css'

import {
  Route,
  Switch
} from 'react-router-dom'

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

import Menu from './components/menu'
import Favs from './components/favs'
import About from './components/about'

const App = () => (
  <div className="app">
    <Menu />
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="swipe"
          timeout={300}
        >
          <Switch location={location}>
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
    )} />
  </div>
)

export default App
