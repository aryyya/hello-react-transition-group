import React, { useState } from 'react'
import cn from 'classnames'
import './menu.css'
import { CSSTransition } from 'react-transition-group'
import {
  NavLink,
  withRouter
} from 'react-router-dom'

const SameLink = withRouter(({
  location,
  to,
  children,
  className
}) => (
  location.pathname === to 
    ? <span
        className={className + ' active'}
      >
        {children}
      </span>
    : <NavLink
        exact
        className={className}
        to={to}
      >
        {children}
      </NavLink>
))

const Menu = () => {
  const [ showBalloon, setShowBalloon ] = useState(false)
  const toggle = () => setShowBalloon(!showBalloon)

  return (
    <div className="menu">
      <div className="menu__content">
        <button
          className={cn('menu__toggler', {
            'menu__toggler--active': showBalloon
          })}
          onClick={toggle}
        >
          Menu
        </button>
        <CSSTransition
          in={showBalloon}
          classNames="slide"
          timeout={300}
          unmountOnExit
        >
          <ul className="menu__links">
            <li className="menu__link">
              <SameLink
                className="menu__link-link"
                to="/"
              >
                favs
              </SameLink>
            </li>
            <li className="menu__link">
              <SameLink
                className="menu__link-link"
                to="/about"
              >
                about
              </SameLink>
            </li>
          </ul>
        </CSSTransition>
      </div>
    </div>
  )
}

export default Menu
