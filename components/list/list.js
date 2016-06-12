import React from 'react'
import { map } from 'ramda'

export function List({ list, Component }) {
  return (
    <ul className='list'>
      {
        map(
          data => {
            return <li className='list-item'>
              <Component {...data} />
            </li>
          },
          list
        )
      }
    </ul>
  )
}

