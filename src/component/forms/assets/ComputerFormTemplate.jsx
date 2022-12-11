import React from 'react';
import FormsTemplate from '../FormsTemplate';

const ComputerFormTemplate = () => {
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Otro",
      type: "input",
      key: "otro",
    },
    {
      title: "A casa",
      type: "select",
      key: "locations",
      addNew: true,
    },
    {
      title: "Check Box",
      type: "checkbox",
      renombrarPropiedad: [
        {
          subTitle: "check1",
          key: "checkbox",
        },
        {
          subTitle: "check2",
          key: "checkbox",
        },
        {
          subTitle: "check3",
          key: "checkbox",
        },
        {
          subTitle: "check4",
          key: "checkbox",
        },
        {
          subTitle: "check5",
          key: "checkbox",
        },
        {
          subTitle: "check6",
          key: "checkbox",
        },
      ]
    },
    {
      title: "Otro Select",
      type: "select",
      key: "locations",
      addNew: true,
    },
    {
      title: "Un Textarea",
      type: "textarea",
      key: "locations",
    },
    {
      title: "yet another select",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
  ]

  const FormHeader = [
    {
      title: "Computers",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default ComputerFormTemplate