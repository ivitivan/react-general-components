import test from 'ava'
import React from 'react'
import { noop, renderJSX, JSX } from "jsx-test-helpers"
import { Link } from '../link'

test('Should render link properly', t => {
  const actual = renderJSX(
    <Link href='https://www.google.com'>google</Link>
  )
  const expected = JSX(
    <a href='https://www.google.com'>google</a>
  )

  t.deepEqual(actual, expected)
})

