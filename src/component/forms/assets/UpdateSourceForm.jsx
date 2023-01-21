import React from 'react';
import FormsTemplate from '../FormsTemplate';

const UpdateSourceForm = () => {
  
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
      title: "Update Source",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default UpdateSourceForm;