import React from 'react';
import FormsTemplate from '../FormsTemplate';

const PhoneTypeForm = () => {
  
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
      title: "Phone Type",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default PhoneTypeForm;