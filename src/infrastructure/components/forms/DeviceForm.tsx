import { useEffect, useState } from "react";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetMonitormodelsSelect } from "../../hooks/Monitors/useGetMonitormodelsSelect";
import { useGetMonitortypesSelect } from "../../hooks/Monitors/useGetMonitortypesSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetDevicemodelsSelect } from "../../hooks/Devices/useGetDevicemodelsSelect";
import { useGetDevicetypesSelect } from "../../hooks/Devices/useGetDevicetypesSelect";
import { DevicesData } from "../../../domain/models/forms/DevicesData";
import { devicesService } from "../../../domain/services/api/Devices.service";
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import StatusForm from "./StatusForm";
import LocationForm from "./LocationForm";
import DeviceTypeForm from "./DeviceTypeForm";
import ManufacturerForm from "./ManufacturerForm";
import GroupInChargeForm from "./GroupInChargeForm";
import DeviceModelForm from "./DeviceModelForm";
import GroupForm from "./GroupForm";
import UpdateSourceForm from "./UpdateSourceForm";

export default function DeviceForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as DevicesData;
    devicesService.createDevices(formJson);
  };

  const [modalContent, setModalContent] = useState<any>("")

  const userInChargeOptions = useGetUserInChargeSelect()
  const usersOptions = useGetUsersSelect()
  const groupInChargeOptions = useGetGroupInChargeSelect()
  const groupsOptions = useGetGroupsSelect()
  const locationOptions = useGetLocationsSelect()
  const stateOptions = useGetStatesSelect()
  const manufacturerOptions = useGetManufacturersSelect()
  const monitorModelOptions = useGetMonitormodelsSelect()
  const monitorTypeOptions = useGetMonitortypesSelect()
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()
  const deviceModelOptions = useGetDevicemodelsSelect()
  const deviceTypeOptions = useGetDevicetypesSelect()

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
    monitorModelOptions.get()
    monitorTypeOptions.get()
    autoupdatesystemOptions.get()
    deviceModelOptions.get()
    deviceTypeOptions.get()
  }, [])

  return (
    <>
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Devices"}
        iconName={"Devices"}
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
            htmlFor="peripheraltypes"
          >
            Devices Types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="peripheraltypes"
              options={deviceTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<DeviceTypeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"users"}
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
            htmlFor="peripheralmodels"
          >
            Model
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="peripheralmodels"
              options={deviceModelOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<DeviceModelForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alternativeusernamenumber"
          >
            Alternate Username Number
          </label>
          <TextInput
            id={"contact"}
            placeholder="Enter your Alternate Username number here"
            required
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
            id={"serial"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alternativeusername"
          >
            Alternate Username
          </label>
          <TextInput
            id={"contact_num"}
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
            htmlFor="user"
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
            id="is_global"
            options={managementTypeOptions}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group"
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
          <TextInput id={"brand"} />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="updatesource"
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
      </Form>
    </>
  )
};
