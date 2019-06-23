import React, { useState } from 'react'
import cn from 'classnames'
import './menu.css'
import { CSSTransition } from 'react-transition-group'

const Menu = () => {
  const [ showBalloon, setShowBalloon ] = useState(true)
  const toggle = () => setShowBalloon(!showBalloon)

  return (
    <div className="menu">
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
        timeout={350}
        classNames="menu__fade"
        unmountOnExit
        appear
      >
        <div className="menu__items">
          <ul className="menu__list">
            <li className="menu__list-item">Home</li>
            <li className="menu__list-item">Profile</li>
            <li className="menu__list-item">Favorites</li>
            <li className="menu__list-item">Sign out</li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Menu
