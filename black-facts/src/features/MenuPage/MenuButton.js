import React from 'react'

const MenuButton = ({ description }) => {

  return (
    <button type="button" class="btn btn-primary btn-lg btn-block">
      {description.type}
      <p>{description.description}</p>
      </button>
  )
}

export default MenuButton