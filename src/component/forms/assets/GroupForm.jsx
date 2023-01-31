import React from 'react';
import FormsTemplate from '../FormsTemplate';

const GroupForm = () => {
  
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
      data: ["Yes", "No"]
    },
    {
      title: "Watcher",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
    },
    {
      title: "Assigned to",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
    },
    {
      title: "Comment",
      type: "textarea",
      key: "user",
    },
    {
      title: "Task",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
    },
    {
      title: "Can be notified	",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
    },
    {
      title: "Can be manager",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
    },
    {
      title: "Items",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
    },
    {
      title: "User",
      type: "select",
      key: "user",
      data: ["Yes", "No"]
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

export default GroupForm;