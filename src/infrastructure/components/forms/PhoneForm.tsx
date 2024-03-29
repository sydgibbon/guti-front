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
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect"
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect"
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect"
import { useGetPhonetypesSelect } from "../../hooks/Phones/useGetPhonetypesSelect"
import { useGetPhonemodelsSelect } from "../../hooks/Phones/useGetPhonemodelsSelect"
import { useGetPhonePowerSuppliesSelect } from "../../hooks/Phones/useGetPhonePowerSuppliesSelect"
import Checkbox from "../CheckBox"
import { PhoneData } from "../../../domain/models/forms/PhoneData"
import { phonesService } from "../../../domain/services/api/Phones.service"
import { errorNotification, successNotification } from "../../redux/Global";
import { useDispatch } from "react-redux"
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import StatusForm from "./StatusForm"
import LocationForm from "./LocationForm"
import PhoneTypeForm from "./PhoneTypeForm"
import ManufacturerForm from "./ManufacturerForm"
import GroupInChargeForm from "./GroupInChargeForm"
import PhoneModelForm from "./PhoneModelForm"
import GroupForm from "./GroupForm"
import UpdateSourceForm from "./UpdateSourceForm"
import PhonePowerForm from "./PhonePowerForm"

export default function PhoneForm() {

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as PhoneData;
    phonesService.createPhone(formJson);

    try {
      await phonesService.createPhone(formJson);
      dispatch(
        successNotification()
      );
      form.reset();
    } catch (error) {
      dispatch(
        errorNotification()
      );
    }
  }

  const dispatch = useDispatch();

  const [modalContent, setModalContent] = useState<any>("")

  interface CheckboxState {
    headset: boolean
    speaker: boolean
  }

  const [checkboxes, setCheckboxes] = useState({
    headset: false,
    speaker: false,
  })

  const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }))
  }

  const userInChargeOptions = useGetUserInChargeSelect()
  const usersOptions = useGetUsersSelect()
  const groupInChargeOptions = useGetGroupInChargeSelect()
  const groupsOptions = useGetGroupsSelect()
  const locationOptions = useGetLocationsSelect()
  const stateOptions = useGetStatesSelect()
  const manufacturerOptions = useGetManufacturersSelect()
  const phoneModelOptions = useGetPhonemodelsSelect()
  const phoneTypeOptions = useGetPhonetypesSelect()
  const phonePowerSupplyTypeOptions = useGetPhonePowerSuppliesSelect()
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()

  const managementTypeOptions = [
    { id: "0", name: "Unit Management" },
    { id: "1", name: "Global Management" },
  ]

  useEffect(() => {
    usersOptions.get()
    userInChargeOptions.get()
    groupsOptions.get()
    groupInChargeOptions.get()
    locationOptions.get()
    stateOptions.get()
    manufacturerOptions.get()
    phoneModelOptions.get()
    phoneTypeOptions.get()
    phonePowerSupplyTypeOptions.get()
    autoupdatesystemOptions.get()
  }, [])
  return (
    <>
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Phones"}
        iconName={"Phones"}
      >
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="name"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder={"ingrese su nombre"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="states"
          >
            Status
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="states"
              options={stateOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<StatusForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="locations"
          >
            Locations
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="locations"
              options={locationOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<LocationForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="phonetypes"
          >
            Phone types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="phonetypes"
              options={phoneTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<PhoneTypeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users_tech"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"users_tech"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="manufacturers"
          >
            Manufacturers
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="manufacturers"
              options={manufacturerOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<ManufacturerForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="grouptech"
          >
            Group in charge of the hardware
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="groups_tech"
              options={groupInChargeOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<GroupInChargeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="phonemodels"
          >
            Model
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="phonemodels"
              options={phoneModelOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<PhoneModelForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="contact_num"
          >
            Alternate Username Number
          </label>
          <TextInput
            id={"contact_num"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="serial"
          >
            Serial Number
          </label>
          <TextInput
            id={"serial"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="contact"
          >
            Alternate Username
          </label>
          <TextInput
            id={"contact"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="otherserial"
          >
            Inventory Number
          </label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users"
          >
            User
          </label>
          <SelectOption
            id="users"
            options={usersOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="managmenttype"
          >
            Managment Type
          </label>
          <SelectOption
            id="managmenttype"
            options={managementTypeOptions}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="groups"
          >
            Groups
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="groups"
              options={groupsOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<GroupForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="uuid"
          >
            UUID
          </label>
          <TextInput
            id="uuid"
            placeholder="Enter your UUID here"
            required
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

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="brand"
          >
            Brand
          </label>
          <TextInput
            id={"brand"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="autoupdatesystems"
          >
            Update Source
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="autoupdatesystems"
              options={autoupdatesystemOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<UpdateSourceForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="number_line"
          >
            Number of Lines
          </label>
          <TextInput
            id={"number_line"}
            type={"number"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="phonepowersupplies"
          >
            Phone power supply types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="phonepowersupplies"
              options={phonePowerSupplyTypeOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<PhonePowerForm />)} />
          </div>
        </div>

        <div className="  rounded-lg">
          <div className="mb-2 font-semibold">Ports</div>
          <div className="grid grid-cols-5 gap-2">
            <Checkbox
              id="have_headset"
              label="Headset"
              checked={checkboxes.headset}
              onChange={() => handleCheckboxChange("headset")}
            />
            <Checkbox
              id="have_hp"
              label="Speaker"
              checked={checkboxes.speaker}
              onChange={() => handleCheckboxChange("speaker")}
            />
          </div>
        </div>
      </Form>
    </>
  )
};
