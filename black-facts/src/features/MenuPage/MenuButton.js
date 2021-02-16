import React from 'react';
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
const MenuButton = ({ description }) => {
  let history = useHistory();
  
  const handleMenuButtonRedirect = () => {
    history.push("/play");
  };

  return (
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter" onClick={handleMenuButtonRedirect}>
     
=======
const MenuButton = ({ description, target }) => {
  return (
    <button type="button" className="btn btn-primary btn-lg btn-block modalMenuButton" data-toggle="modal" data-target={target}>
>>>>>>> af58499ac9dabb0b931e2171346f110e571d7ba5
     {description.type}
      </button>
  )
}

export default MenuButton