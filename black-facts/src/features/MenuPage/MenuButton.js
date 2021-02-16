import React from 'react'

const MenuButton = ({ description }) => {

  return (
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">
     
     {description.type}
      </button>
  )
}

export default MenuButton