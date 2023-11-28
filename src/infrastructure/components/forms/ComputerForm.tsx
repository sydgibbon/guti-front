import Form from "./Form"
import SelectOption from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import { useEffect, useState } from "react"
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect"
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect"
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect"
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect"
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect"
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect"
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect"
import { useGetComputermodelsSelect } from "../../hooks/Computers/useGetComputermodelsSelect"
import { useGetComputertypesSelect } from "../../hooks/Computers/useGetComputertypesSelect"
import { useGetNetworksSelect } from "../../hooks/Networks/useGetNetworksSelect"
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect"
import { ComputerData } from "../../../domain/models/forms/ComputerData"
import { computersService } from "../../../domain/services/api/Computers.service"
import { useDispatch } from "react-redux";
import { errorNotification, successNotification } from "../../redux/Global";
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import LocationForm from "./LocationForm"
import ComputerTypeForm from "./ComputerTypeForm"
import ComputerModelForm from "./ComputerModelForm"
import StatusForm from "./StatusForm"
import GroupInChargeForm from "./GroupInChargeForm"
import ManufacturerForm from "./ManufacturerForm"
import NetworkForm from "./NetworkForm"
import UpdateSourceForm from "./UpdateSourceForm"
import GroupForm from "./GroupForm"

export default function ComputersForm() {

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as ComputerData;
    computersService.createComputer(formJson);

    try {
      await computersService.createComputer(formJson);
      dispatch(
        successNotification()
      );
      form.reset();
    } catch (error) {
      dispatch(
        errorNotification()
      );
    }
  };

  const dispatch = useDispatch();

  const userInChargeOptions = useGetUserInChargeSelect()
  const usersOptions = useGetUsersSelect()
  const groupInChargeOptions = useGetGroupInChargeSelect()
  const groupsOptions = useGetGroupsSelect()
  const locationOptions = useGetLocationsSelect()
  const stateOptions = useGetStatesSelect()
  const manufacturerOptions = useGetManufacturersSelect()
  const computerModelOptions = useGetComputermodelsSelect()
  const computerTypeOptions = useGetComputertypesSelect()
  const networkOptions = useGetNetworksSelect()
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()

  const [modalContent, setModalContent] = useState<any>("")



  useEffect(() => {
    usersOptions.get()
    userInChargeOptions.get()
    groupsOptions.get()
    groupInChargeOptions.get()
    locationOptions.get()
    stateOptions.get()
    manufacturerOptions.get()
    computerModelOptions.get()
    computerTypeOptions.get()
    networkOptions.get()
    autoupdatesystemOptions.get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Computers"}
        iconName={"Computers"}
      >
        <div className="Name">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="name"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder="Enter your name here"
            required
          />
        </div>

        <div className="Status">
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

        <div className="Locations">
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
            htmlFor="computertypes"
          >
            Computer Types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="computertypes"
              options={computerTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<ComputerTypeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users_tech"
          >
            Technician in Charge of the Hardware
          </label>
            <SelectOption
              id="users_tech"
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
            htmlFor="groups_tech"
          >
            Group in Charge of the Hardware
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
            htmlFor="computermodels"
          >
            Model
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="computermodels"
              options={computerModelOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<ComputerModelForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="contact_num"
          >
            Alternate username number
          </label>
          <TextInput
            id={"contact_num"}
            placeholder="Enter your alternate username number here"
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
            Inventory/Asset Number
          </label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory/Asset Number here"
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
            htmlFor="networks"
          >
            Network
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="networks"
              options={networkOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<NetworkForm />)} />
          </div>
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
            Comment
          </label>
          <TextArea
            id="comment"
            placeholder="Enter your comment here"
            rows={3}
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
      </Form >
    </>
  )
};
