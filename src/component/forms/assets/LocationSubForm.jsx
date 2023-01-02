import React from 'react';
import FormsTemplate from '../FormsTemplate';

const LocSubForm = () => {
  
  const inputPropierties = [
    {
      title: "Nombre",
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
      title: "Address",
      type: "input",
      key: "name",
    },
    {
      title: "Postal code",
      type: "input",
      key: "name",
    },
    {
      title: "Town",
      type: "input",
      key: "name",
    },
    {
      title: "State",
      type: "input",
      key: "name",
    },
    {
      title: "Country",
      type: "input",
      key: "name",
    },
    {
      title: "Building number",
      type: "input",
      key: "name",
    },
    {
      title: "Room number",
      type: "input",
      key: "name",
    },
    {
      title: "Location on map",
      type: "input",
      key: "name",
    },
    {
      title: "Latitude",
      type: "input",
      key: "name",
    },
    {
      title: "Longitude",
      type: "input",
      key: "name",
    },
    {
      title: "Altitude",
      type: "input",
      key: "name",
    },

  ]

  const FormHeader = [
    {
      title: "Location",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default LocSubForm;