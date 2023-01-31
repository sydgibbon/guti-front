import React from 'react';
import FormsTemplate from '../FormsTemplate';

const CartridgeTypeForm = () => {
  
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "user",
    },
  ]
  const FormHeader = [
    {
      title: "Cartridge Type",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default CartridgeTypeForm;