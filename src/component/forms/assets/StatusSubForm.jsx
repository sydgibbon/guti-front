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
      type: "choise",
      key: "name",
    },
    {
      title: "Monitors",
      type: "choise",
      key: "name",
    },
    {
      title: "Network devices",
      type: "choise",
      key: "name",
    },
    {
      title: "Devices",
      type: "choise",
      key: "name",
    },
    {
      title: "Phones",
      type: "choise",
      key: "name",
    },
    {
      title: "Printers",
      type: "choise",
      key: "name",
    },
    {
      title: "Licenses",
      type: "choise",
      key: "name",
    },
    {
      title: "Certificates",
      type: "choise",
      key: "name",
    },
    {
      title: "Enclosures",
      type: "choise",
      key: "name",
    },
    {
      title: "PDUs",
      type: "choise",
      key: "name",
    },
    {
      title: "Lines",
      type: "choise",
      key: "name",
    },
    {
      title: "Racks",
      type: "choise",
      key: "name",
    },
    {
      title: "Versions",
      type: "choise",
      key: "name",
    },
    {
      title: "Clusters",
      type: "choise",
      key: "name",
    },
    {
      title: "Contracts",
      type: "choise",
      key: "name",
    },
    {
      title: "Appliances",
      type: "choise",
      key: "name",
    },
    {
      title: "Database instances",
      type: "choise",
      key: "name",
    },
    {
      title: "Cables",
      type: "choise",
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