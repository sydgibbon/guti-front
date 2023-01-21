import React from 'react';
import FormsTemplate from '../FormsTemplate';

const SoftwareCategoryForm = () => {
  
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
    {
      title: "As Child of",
      type: "select",
      key: "name",
    },
  ]

  const FormHeader = [
    {
      title: "Software category",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default SoftwareCategoryForm;