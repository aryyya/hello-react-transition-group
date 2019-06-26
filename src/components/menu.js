import React, { useState } from 'react'
import cn from 'classnames'
import './menu.css'
import { CSSTransition } from 'react-transition-group'

const Menu = () => {
  const [ showBalloon, setShowBalloon ] = useState(false)
  const [ showHighlightedMenuItem, setShowHighlightMenuItem ] = useState(false)

  const toggle = () => setShowBalloon(!showBalloon)
  const toggleHighlightedMenuItem = () => setShowHighlightMenuItem(!showHighlightedMenuItem)

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
            <li className="menu__link">favs</li>
            <li className="menu__link">about</li>
          </ul>
        </CSSTransition>
      </div>
    </div>
  )

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
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={toggleHighlightedMenuItem}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={toggleHighlightedMenuItem}
      >
        <div className="menu__items">
          <ul className="menu__list">
            <li
              className={cn('menu__list-item', {
                'menu__list-item--active': showHighlightedMenuItem
              })}
            >
              Home
            </li>
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
