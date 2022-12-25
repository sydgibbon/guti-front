import React from 'react'
import { TbPlus, TbList, TbMap, TbApps } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const SoftwareForm = () => {

	const formPropierties = [
		{
      title: "Name",
      type: "input",
      key: "name",
    },
		{
      title: "As child of",
      type: "select",
      key: "locations", //key backend?
      addList: true,
		},
		{
      title: "Associable to a ticket",
      type: "checkbox",
      subCheckBox: [
				{
					subTitle: "",
					key: "check1",
				},
			]
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
      key: "users_tech_id",
      addNew: true,
    },
		{
      title: "Publisher",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
		{
      title: "Group in Charge of the Hardware",
      type: "select",
      key: "groups_tech_id",
      addList: true,
      addNew: true,
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
      title: "Pictures",
      type: "input",
      key: "pictures",
    },
		{
      title: "Upgrade",
      type: "checkbox",
      subCheckBox: [
				{
					type: "select",
					key: "check1",
					addList: true,	//Select interno del checkbox?
				},
			]
		},
		{
      title: "Software category",
      type: "select",
      key: "softwarecategories_id",
      addList: true,
      addNew: true,
    },

	]

	const FormHeader = [
    {
      title: "Software",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]


	return (
		FormsTemplate (formPropierties, FormHeader)
	)
};

export default SoftwareForm