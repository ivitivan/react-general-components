import test from 'ava'
import React from 'react'
import { noop, renderJSX, JSX } from "jsx-test-helpers"
import { Input } from '../input'

function input() {}

test(t => {
  const actual = renderJSX(
    <Input onChange={noop}/>
  )
  const expected = JSX(
    <input onChange={noop}/>
  )

  t.deepEqual(actual, expected)
})

