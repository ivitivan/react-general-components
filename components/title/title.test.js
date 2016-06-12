import test from 'ava'
import React from 'react'
import { noop, renderJSX, JSX } from 'jsx-test-helpers'
import { Title } from './title'

test('Should render a title', t => {
  const actual = renderJSX(
    <Title>Hello</Title>
  )
  const expected = JSX(
    <h2>Hello</h2>
  )

  t.deepEqual(actual, expected)
})

