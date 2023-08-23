import { useEffect, useState } from "react"
import SelectOption from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect"
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect"
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect"
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect"
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect"
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect"
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect"
import { useGetSoftwareCategoriesSelect } from "../../hooks/Softwares/useGetSoftwareCategoriesSelect"
import { useGetAllSoftwares } from "../../hooks/Softwares/useGetAllSoftwares"
import Checkbox from "../CheckBox"
import ImageInput from "../ImageInput"
import { SoftwareData } from "../../../domain/models/forms/SoftwareData"
import { softwaresService } from "../../../domain/services/api/Softwares.service"

export default function SoftwareForm() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()) as unknown as SoftwareData;
    softwaresService.createSoftware(formJson)

  };


  const userInChargeOptions = useGetUserInChargeSelect()
  const usersOptions = useGetUsersSelect()
  const groupInChargeOptions = useGetGroupInChargeSelect()
  const groupsOptions = useGetGroupsSelect()
  const locationOptions = useGetLocationsSelect()
  const manufacturerOptions = useGetManufacturersSelect()
  const softwarecategoryOptions = useGetSoftwareCategoriesSelect()
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()
  const upgradeOptions = useGetAllSoftwares()

  interface CheckboxState {
    associable: boolean
    upgrade: boolean
  }

  useEffect(() => {
    usersOptions.get()
    userInChargeOptions.get()
    groupsOptions.get()
    groupInChargeOptions.get()
    locationOptions.get()
    manufacturerOptions.get()
    softwarecategoryOptions.get()
    autoupdatesystemOptions.get()
    upgradeOptions.get()
  }, [])

  const [checkboxes, setCheckboxes] = useState({
    associable: false,
    upgrade: false,
  })

  const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }))
  }

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Software"}
        iconName={"Software"}
      >
        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder={"ingrese su nombre"}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="childof"
          >
            Associable to a Ticket
          </label>
          <div className="grid grid-cols-4 gap-2 flex-1">
            <Checkbox
              id="is_helpdesk_visible"
              checked={checkboxes.associable}
              onChange={() => handleCheckboxChange("associable")}
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="location"
          >
            Locations
          </label>
          <SelectOption
            id={"locations"}
            options={locationOptions.data?.data}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="hardware"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"users_tech"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="publisher"
          >
            Publisher
          </label>
          <SelectOption
            id={"manufacturers"}
            options={manufacturerOptions.data?.data}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group-hardware"
          >
            Group in charge of the hardware
          </label>
          <SelectOption
            id={"groups_tech"}
            options={groupInChargeOptions.data?.data}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="user"
          >
            User
          </label>
          <SelectOption
            id={"users"}
            options={usersOptions.data?.data}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="groups"
          >
            Groups
          </label>
          <SelectOption
            id={"groups"}
            options={groupsOptions.data?.data}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
          >
            Comment
          </label>
          <TextArea
            id={"comment"}
            placeholder="Enter your comment here"
            rows={3}
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pictures"
          >
            Pictures
          </label>
          <ImageInput
            id={"picture"}
            fileType={".jpg, .jpeg, .png"}
            maxSize={3}
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="text-sm mb-2 font-semibold block">
            Upgrade
          </label>
          <div className="grid grid-cols-4 gap-2">
            <Checkbox
              id="is_update"
              label="From"
              checked={checkboxes.upgrade}
              onChange={() => handleCheckboxChange("upgrade")}
            />
            <SelectOption
              id={"from"}
              label={""}
              options={upgradeOptions?.data}
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="softwarecategories"
          >
            Software Category
          </label>
          <SelectOption
            id={"softwarecategories"}
            options={softwarecategoryOptions?.data}
          />
        </div>
      </Form>
    </div>
  )
};
