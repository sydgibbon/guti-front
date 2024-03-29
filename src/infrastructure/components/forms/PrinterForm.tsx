import { useEffect, useState } from "react";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetDevicemodelsSelect } from "../../hooks/Devices/useGetDevicemodelsSelect";
import { useGetDevicetypesSelect } from "../../hooks/Devices/useGetDevicetypesSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetNetworksSelect } from "../../hooks/Networks/useGetNetworksSelect";
import { useGetPrintermodelsSelect } from "../../hooks/Printers/useGetPrintermodelsSelect";
import { useGetPrintertypesSelect } from "../../hooks/Printers/useGetPrintertypesSelect";
import { useGetSnmpCredentialsSelect } from "../../hooks/SnmpCredentials/useGetSnmpCredentialsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import Checkbox from "../CheckBox";
import { PrinterData } from "../../../domain/models/forms/PrinterData";
import { printersService } from "../../../domain/services/api/Printers.service";
import { errorNotification, successNotification } from "../../redux/Global";
import { useDispatch } from "react-redux"
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import StatusForm from "./StatusForm";
import LocationForm from "./LocationForm";
import PrinterTypeForm from "./PrinterTypeForm";
import ManufacturerForm from "./ManufacturerForm";
import GroupInChargeForm from "./GroupInChargeForm";
import PrinterModelForm from "./PrinterModelForm";
import NetworkForm from "./NetworkForm";
import GroupForm from "./GroupForm";
import UpdateSourceForm from "./UpdateSourceForm";

export default function PrinterForm() {
  interface CheckboxState {
    serial: boolean;
    parallel: boolean;
    usb: boolean;
    ethernet: boolean;
    wifi: boolean;
  }

  const [checkboxes, setCheckboxes] = useState({
    serial: false,
    parallel: false,
    usb: false,
    ethernet: false,
    wifi: false,
  });

  const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as PrinterData;

    printersService.createPrinter(formJson);

    try {
      await printersService.createPrinter(formJson);
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

  const [modalContent, setModalContent] = useState<any>("")

  const userInChargeOptions = useGetUserInChargeSelect();
  const usersOptions = useGetUsersSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const printerModelOptions = useGetPrintermodelsSelect();
  const printerTypeOptions = useGetPrintertypesSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();
  const networkOptions = useGetNetworksSelect();
  const snpmCredentialOptions = useGetSnmpCredentialsSelect();

  const managementTypeOptions = [
    { id: "0", name: "Unit Management" },
    { id: "1", name: "Global Management" },
  ];

  useEffect(() => {
    usersOptions.get();
    userInChargeOptions.get();
    groupsOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    printerModelOptions.get();
    printerTypeOptions.get();
    autoupdatesystemOptions.get();
    networkOptions.get();
    snpmCredentialOptions.get();
  }, []);

  return (
    <>
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Printers"}
        iconName={"Printers"}
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
            placeholder={"ingrese su nombre"}
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
        <div className="Printer Types">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="printertypes"
          >
            Printer Types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="printertypes"
              options={printerTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<PrinterTypeForm />)} />
          </div>
        </div>
        <div className="Technician in charge of the hardware">
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
        <div className="Manufacturers">
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
        <div className="Group in charge of the hardware">
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
        <div className="Model">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="printermodels"
          >
            Model
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="printermodels"
              options={printerModelOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<PrinterModelForm />)} />
          </div>
        </div>
        <div className="Alternate Username Number">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="contact"
          >
            Alternate Username Number
          </label>
          <TextInput
            id={"contact"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>
        <div className="Serial Number">
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
        <div className="Alternate Username">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="contact_num"
          >
            Alternate Username
          </label>
          <TextInput
            id={"contact_num"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>
        <div className="Inventory Number">
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
        <div className="System description">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="sysdescr"
          >
            System description
          </label>
          <TextArea
            id={"sysdescr"}
            rows={3}
          />
        </div>
        <div className="SNMP credential">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="snmpcredential"
          >
            SNMP credential
          </label>
          <SelectOption
            id="snmpcredential"
            options={snpmCredentialOptions.data?.data}
          />
        </div>
        <div className="User">
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
        <div className="Managment Type">
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
        <div className="Network">
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
        <div className="Groups">
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
        <div className="UUID">
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
        <div className="Comment">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
          >
            Comment
          </label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>
        <div className="Update Source">
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
        <div className="Memory">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="memory_size"
          >
            Memory
          </label>
          <TextInput
            id={"memory_size"}
            type={"number"}
          />
        </div>
        <div className="Initial page counter">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="init_pages_counter"
          >
            Initial page counter
          </label>
          <TextInput
            id={"init_pages_counter"}
            type={"number"}
          />
        </div>
        <div className="Current counter of pages">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="last_pages_counter"
          >
            Current counter of pages
          </label>
          <TextInput
            id={"last_pages_counter"}
            type={"number"}
          />
        </div>

        <div className="Ports">
          <div className="mb-2 font-semibold">Ports</div>
          <div className="grid grid-cols-5 gap-2">
            <Checkbox
              id="have_serial"
              label="Serial"
              checked={checkboxes.serial}
              onChange={() => handleCheckboxChange("serial")}
            />
            <Checkbox
              id="have_parallel"
              label="Parallel"
              checked={checkboxes.parallel}
              onChange={() => handleCheckboxChange("parallel")}
            />
            <Checkbox
              id="have_usb"
              label="USB"
              checked={checkboxes.usb}
              onChange={() => handleCheckboxChange("usb")}
            />
            <Checkbox
              id="have_ethernet"
              label="Ethernet"
              checked={checkboxes.ethernet}
              onChange={() => handleCheckboxChange("ethernet")}
            />
            <Checkbox
              id="have_wifi"
              label="Wifi"
              checked={checkboxes.wifi}
              onChange={() => handleCheckboxChange("wifi")}
            />
          </div>
        </div>
      </Form>
    </>
  );
};

