import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Menu from './components/menu'
import Favs from './components/favs'
import About from './components/about'

const App = () => (
  <div className="app">
    <Router>
      <Menu />
      <Route
        exact
        path="/"
        component={Favs}
      />
      <Route
        path="/about"
        component={About}
      />
    </Router>
  </div>
)

export default App
