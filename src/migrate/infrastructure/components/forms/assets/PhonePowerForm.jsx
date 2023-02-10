import React from 'react';
import FormsTemplate from '../FormsTemplate';

const PhonePowerForm = () => {
  
  const inputPropierties = [
    {
      title: "Nombre",
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
      title: "Manufacturer",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default PhonePowerForm;