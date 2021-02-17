import React from 'react';
import { useHistory } from "react-router-dom";

const MenuButton = ({ description, target }) => {
  return (
    <button type="button" className="btn btn-primary btn-lg btn-block modalMenuButton" data-toggle="modal" data-target={target}>

     {description.type}
      </button>
  )
}

export default MenuButton