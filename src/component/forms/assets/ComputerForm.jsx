import React from 'react';
import FormsTemplate from '../FormsTemplate';

const ComputerForm = () => {

  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
    {
      title: "Technician in Charge of the Hardware",
      type: "select",
      key: "computermodels",
      addNew: true,
    },
    {
      title: "Group in Charge of the Hardware",
      type: "select",
      key: "computertypes",
      addList: true,
      addNew: true,
    },
    {
      title: "Alternate Username Number",
      type: "input",
      key: "contact_number",
    },
    {
      title: "Alternate Username",
      type: "input",
      key: "contact",
    },
    {
      title: "User",
      type: "select",
      key: "user",
      addList: true,
    },
    {
      title: "Group",
      type: "select",
      key: "group",
      addList: true,
      addNew: true,
    },

    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Status",
      type: "select",
      key: "status",
      addList: true,
      addNew: true,
    },
    {
      title: "Types",
      type: "select",
      key: "types",
      addList: true,
      addNew: true,
    },
    {
      title: "Manufacturers",
      type: "select",
      key: "manufacturers",
      addList: true,
      addNew: true,
    },
    {
      title: "Model",
      type: "select",
      key: "model",
      addList: true,
      addNew: true,
    },
    {
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
    {
      title: "Inventory/Asset Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "Network",
      type: "select",
      key: "network",
      addList: true,
    },
    {
      title: "UUID",
      type: "input",
      key: "uuid",
    },
    {
      title: "Update Sources",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
    // {
    //   title: "Check Box para DEMO",
    //   type: "checkbox",
    //   subCheckBox: [
    //     {
    //       subTitle: "check box 1",
    //       key: "checkbox",
    //     },
    //     {
    //       subTitle: "check box 2",
    //       key: "checkbox",
    //     },
    //     {
    //       subTitle: "check3",
    //       key: "checkbox",
    //     },
    //     {
    //       subTitle: "check box con nombre largo",
    //       key: "checkbox",
    //     },
    //     {
    //       subTitle: "otro check box con nombre largo",
    //       key: "checkbox",
    //     },
    //     {
    //       subTitle: "check6",
    //       key: "checkbox",
    //     },
    //   ]
    // },
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

export default ComputerForm