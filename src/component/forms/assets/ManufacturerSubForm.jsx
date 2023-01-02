import React from 'react';
import FormsTemplate from '../FormsTemplate';

const ManufacturerSubForm = () => {
  
  const inputPropierties = [
    {
      title: "Nombre",
      type: "input",
      key: "name",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "user",
    },
    {
      title: "Registered IDs (issued by PCI-SIG)",
      type: "select",
      key: "name",
    },
  ]
  const FormHeader = [
    {
      title: "Manufacturer",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default ManufacturerSubForm;