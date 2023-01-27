import React from 'react';
import FormsTemplate from '../FormsTemplate';

const StatusForm = () => {
  
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
    {
      title: "Computers",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Monitors",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Network devices",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Devices",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Phones",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Printers",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Licenses",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Certificates",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Enclosures",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "PDUs",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Lines",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Racks",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Versions",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Clusters",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Contracts",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Appliances",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Database instances",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
    {
      title: "Cables",
      type: "select",
      key: "name",
      data: ["Yes", "No"]
    },
  ]

  const FormHeader = [
    {
      title: "Status",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default StatusForm;