import React from 'react';
import { useHistory } from "react-router-dom";

const MenuButton = ({ description }) => {
  let history = useHistory();
  
  const handleMenuButtonRedirect = () => {
    history.push("/categories");
  };

  return (
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter" onClick={handleMenuButtonRedirect}>
     
     {description.type}
      </button>
  )
}

export default MenuButton