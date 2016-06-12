import React from 'react'

export const Input = ({
  store, onChange
}) => {
  const handleChange = (event) => {
    onChange(store, event.target.value)
  }

  return (
    <input
      onChange={handleChange}
    />
  )
}

