import React from 'react';
import FormsTemplate from '../FormsTemplate';

const GroupSubForm = () => {
  
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
      type: "select",
      key: "user",
    },
    {
      title: "Watcher",
      type: "select",
      key: "user",
    },
    {
      title: "Assigned to",
      type: "select",
      key: "user",
    },
    {
      title: "Task",
      type: "select",
      key: "user",
    },
    {
      title: "Can be notified	",
      type: "select",
      key: "user",
    },
    {
      title: "Can be manager",
      type: "select",
      key: "user",
    },
    {
      title: "Items",
      type: "select",
      key: "user",
    },
    {
      title: "User",
      type: "select",
      key: "user",
    },
  ]

  const FormHeader = [
    {
      title: "Group",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default GroupSubForm