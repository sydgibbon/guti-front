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
					key: "ticket_tco",
				},
			]
		},
		{
      title: "Location",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
		{
      title: "Technician in Charge of the Hardware",
      type: "select",
      key: "users_tech",
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
      key: "groups_tech",
      addList: true,
      addNew: true,
    },
		{
      title: "User",
      type: "select",
      key: "users",
      addList: true,
    },
		{
      title: "Group",
      type: "select",
      key: "groups",
      addList: true,
      addNew: true,
    },
		{
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
		{
      title: "Picture",
      type: "file",
      key: "pictures",
    },
		{
      title: "Upgrade",
      type: "checkboxselect",
      subCheckBox: [
				{
          subTitle: "from:",
					key: "check1",
				},

			]
		},
		{
      title: "Software category",
      type: "select",
      key: "softwarecategories",
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