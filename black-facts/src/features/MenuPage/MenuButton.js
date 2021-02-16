import React from 'react'

const MenuButton = ({ description, target }) => {
  return (
    <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target={target}>
     {description.type}
      </button>
  )
}

export default MenuButton