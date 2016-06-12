import test from 'ava'
import React from 'react'
import { noop, renderJSX, JSX } from 'jsx-test-helpers'
import {Container} from './container';

function Item() {}
test('Should render a container', t => {
  const actual = renderJSX(
    <Container
      items={[<Item/>, <Item/>]}
    />
  )
  const expected = JSX(
    <div>
      <Item/>
      <Item/>
    </div>
  )

  t.deepEqual(actual, expected)
})



