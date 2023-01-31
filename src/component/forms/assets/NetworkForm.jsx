import React from 'react';
import FormsTemplate from '../FormsTemplate';

const NetworkForm = () => {
  
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Comments",
      type: "textarea",
      key: "comment",
    },
  ]

  const FormHeader = [
    {
      title: "Network",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default NetworkForm;