import React from 'react';
import FormsTemplate from '../FormsTemplate';

const MonitorTypeForm = () => {
  
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
      title: "Monitor Type",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default MonitorTypeForm;