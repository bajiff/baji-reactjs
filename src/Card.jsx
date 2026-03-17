import React from 'react'

const Card = ({children}) => {
  return (
    <div>
      <ul>{children}</ul>
      <ul>{children}</ul>
      <ul>{children}</ul>
    </div>
  )
}

export default Card;