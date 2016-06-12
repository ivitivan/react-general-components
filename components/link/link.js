import React from 'react'

export const Link = ({
  href, children
}) => {
  return (
    <a href={href}>{children}</a>
  )
}

