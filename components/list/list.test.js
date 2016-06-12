import test from 'ava';
import { List } from './list'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import { noop, renderJSX, JSX } from "jsx-test-helpers"

const data = [
  {
    href: 'https://www.google.com/',
    text: 'google'
  },
  {
    href: 'https://www.wikipedia.org/',
    text: 'wikipedia'
  }
]

test(t => {
  const Link = ({ href, text }) => <a href={href}>{text}</a>
  const actual = renderJSX(<List list={data} Component={Link}/>)
  const expected = JSX(
    <ul className='list'>
      <li className='list-item'>
        <Link href='https://www.google.com/' text='google'/>
      </li>
      <li className='list-item'>
        <Link href='https://www.wikipedia.org/' text='wikipedia'/>
      </li>
    </ul>
  )

  t.deepEqual(actual, expected)
});

