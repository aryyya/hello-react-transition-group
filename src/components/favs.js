import React, { useState } from 'react'
import './favs.css'
import cn from 'classnames'

const Favs = () => {
  const items = [
    { id: 0, name: 'Jerry Seinfeld'  },
    { id: 1, name: 'Elaine Benes'    },
    { id: 2, name: 'Cosmo Kramer'    },
    { id: 3, name: 'George Costanza' },
    { id: 4, name: 'Larry David'     },
    { id: 5, name: 'Newman'          }
  ]

  const [ favs, setFavs ] = useState([ 4 ])
  const addFav = id => setFavs([
    ...favs,
    id
  ])
  const remFav = id => setFavs(
    favs.filter(fav => fav !== id)
  )
  const isFav = id => favs.includes(id)

  return (
    <div className="favs">
      <div>
        <h3 className="favs__title">Characters</h3>
        <ul className="favs__items">
          {items.map(item => (
            <li
              className={cn('favs__item', {
                'favs__item--is-fav': isFav(item.id)
              })}
              key={item.id}
              onClick={() => isFav(item.id) ? remFav(item.id) : addFav(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="favs__title">Favorites</h3>
        <ul className="favs__favs">
          {items
            .filter(item => favs.includes(item.id))
            .map(item => (
              <li
                className="favs__fav"
                key={item.id}
                onClick={() => remFav(item.id)}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Favs
