import React from 'react';
import FormsTemplate from '../FormsTemplate';

const PduModelForm = () => {
  
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
      title: "Product Number",
      type: "input",
      key: "name",
    },
    {
      title: "Weight",
      type: "number",
      key: "name",
    },
    {
      title: "Required units",
      type: "number",
      key: "name",
    },
    {
      title: "Depth",
      type: "number",
      key: "name",
    },
    {
      title: "Power Connections",
      type: "number",
      key: "name",
    },
    {
      title: "Power Consumption",
      type: "number",
      key: "name",
    },
    {
      title: "Is Half Rack",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Front Picture",
      type: "file",
      key: "name",
    },
    {
      title: "Rear Picture",
      type: "file",
      key: "name",
    },
    {
      title: "Other Pictures",
      type: "file",
      key: "name",
    },
  ]

  const FormHeader = [
    {
      title: "PDU Model",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default PduModelForm;