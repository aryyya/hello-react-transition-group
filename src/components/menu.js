import React, { useState } from 'react'
import cn from 'classnames'
import './menu.css'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

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
          timeout={500}
          unmountOnExit
        >
          <ul className="menu__links">
            <li className="menu__link">
              <Link className="menu__link-link" to="/">favs</Link>
            </li>
            <li className="menu__link">
              <Link className="menu__link-link" to="/about">about</Link>
            </li>
          </ul>
        </CSSTransition>
      </div>
    </div>
  )
}

export default Menu
