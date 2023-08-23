import { useEffect } from "react"
import SelectOption from "../SelectOption"
import TextInput from "../TextInput"
import Form from "./Form"
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect"
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect"
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect"
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect"
import { useGetDevicesimcardsSelect } from "../../hooks/Simcards/useGetDevicesimcardsSelect"
import { useGetLinesSelect } from "../../hooks/Simcards/useGetLinesSelect"
import TextArea from "../TextArea"

export default function SimCardForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const usersOptions = useGetUsersSelect()
  const locationOptions = useGetLocationsSelect()
  const stateOptions = useGetStatesSelect()
  const groupsOptions = useGetGroupsSelect()
  const linesOptions = useGetLinesSelect()
  const devicesimcardsOptions = useGetDevicesimcardsSelect()

  useEffect(() => {
    usersOptions.get()
    groupsOptions.get()
    locationOptions.get()
    stateOptions.get()
    linesOptions.get()
    devicesimcardsOptions.get()
  }, [])

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Simcards"}
        iconName={"Simcards"}
      >
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="component"
          >
            Component
          </label>
          <SelectOption
            id={"component"}
            options={devicesimcardsOptions?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pin"
          >
            PIN Code
          </label>
          <TextInput
            id={"pin"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pin2"
          >
            PIN2 Code
          </label>
          <TextInput
            id={"pin2"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="puk"
          >
            PUK Code
          </label>
          <TextInput
            id={"puk"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="puk2"
          >
            PUK2 Code
          </label>
          <TextInput
            id={"puk2"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="line"
          >
            Lines
          </label>
          <SelectOption
            id={"line"}
            options={linesOptions?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="mobilesuscriber"
          >
            Mobile Subscriber Identification Number
          </label>
          <TextInput
            id={"mobilesuscriber"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="serialnumber"
          >
            Serial Number
          </label>
          <TextInput
            id={"serialnumber"}
            placeholder="Enter your Serial Number here"
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="inventoryassetnumber"
          >
            Inventory Number
          </label>
          <TextInput
            id={"inventoryassetnumber"}
            placeholder="Enter your Inventory Number here"
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="locations"
          >
            Locations
          </label>
          <SelectOption
            id="locations"
            options={locationOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="status"
          >
            Status
          </label>
          <SelectOption
            id="status"
            options={stateOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="user"
          >
            User
          </label>
          <SelectOption
            id="user"
            options={usersOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group"
          >
            Groups
          </label>
          <SelectOption
            id="group"
            options={groupsOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
          >
            Comments
          </label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>
      </Form>
    </div>
  )
};
