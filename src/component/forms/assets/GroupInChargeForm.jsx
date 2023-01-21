import React from 'react';
import FormsTemplate from '../FormsTemplate';

const GroupInChargeForm = () => {
  
  const inputPropierties = [
    {
      title: "Nombre",
      type: "input",
      key: "name",
    },
    {
      title: "As child of",
      type: "select",
      key: "user",
      addList: true,
    },
    {
      title: "Requester",
      type: "choise",
      key: "user",
    },
    {
      title: "Watcher",
      type: "choise",
      key: "user",
    },
    {
      title: "Assigned to",
      type: "choise",
      key: "user",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "user",
    },
    {
      title: "Task",
      type: "choise",
      key: "user",
    },
    {
      title: "Can be notified	",
      type: "choise",
      key: "user",
    },
    {
      title: "Can be manager",
      type: "choise",
      key: "user",
    },
    {
      title: "Items",
      type: "choise",
      key: "user",
    },
    {
      title: "User",
      type: "choise",
      key: "user",
    },
  ]

  const FormHeader = [
    {
      title: "Group in charge of the hardware",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default GroupInChargeForm;