import React from 'react';
import FormsTemplate from '../FormsTemplate';

const PrinterTypeForm = () => {
  
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
      title: "Printer Type",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default PrinterTypeForm;