import React from 'react';
import FormsTemplate from '../FormsTemplate';

const TypeSubForm = () => {
  
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
      title: "Type",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default TypeSubForm;