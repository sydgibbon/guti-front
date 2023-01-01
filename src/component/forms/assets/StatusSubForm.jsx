import React from 'react';
import FormsTemplate from '../FormsTemplate';

const StatusSubForm = () => {
  
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Comments",
      type: "input",
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
    },
    {
      title: "Monitors",
      type: "select",
      key: "name",
    },
    {
      title: "Network devices",
      type: "select",
      key: "name",
    },
    {
      title: "Devices",
      type: "select",
      key: "name",
    },
    {
      title: "Phones",
      type: "select",
      key: "name",
    },
    {
      title: "Printers",
      type: "select",
      key: "name",
    },
    {
      title: "Licenses",
      type: "select",
      key: "name",
    },
    {
      title: "Certificates",
      type: "select",
      key: "name",
    },
    {
      title: "Enclosures",
      type: "select",
      key: "name",
    },
    {
      title: "PDUs",
      type: "select",
      key: "name",
    },
    {
      title: "Lines",
      type: "select",
      key: "name",
    },
    {
      title: "Racks",
      type: "select",
      key: "name",
    },
    {
      title: "Versions",
      type: "select",
      key: "name",
    },
    {
      title: "Clusters",
      type: "select",
      key: "name",
    },
    {
      title: "Contracts",
      type: "select",
      key: "name",
    },
    {
      title: "Appliances",
      type: "select",
      key: "name",
    },
    {
      title: "Database instances",
      type: "select",
      key: "name",
    },
    {
      title: "Cables",
      type: "select",
      key: "name",
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

export default StatusSubForm;