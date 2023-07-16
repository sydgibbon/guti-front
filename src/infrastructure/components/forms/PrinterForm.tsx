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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (computer.error) {
  //     alert(computer.error);
  //   }
  // }, [computer.error]);

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

  const managementTypeOptions = [{ id: "0", name: "Unit Management" }, { id: "1", name: "Global Management" }]

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

  }, [])

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <div className= "Name">
          <label className="text-sm mb-2 font-semibold block" htmlFor="testing">Name</label>
          <TextInput
            id={"testing"}
            placeholder={"ingrese su nombre"}
          />
        </div>
        <div className="Status">
          <label className="text-sm mb-2 font-semibold block" htmlFor="status">Status</label>
          <SelectOption
            id={"status"}
            options={stateOptions.data?.data}
          />
        </div>
        <div className="Locations">
          <label className="text-sm mb-2 font-semibold block" htmlFor="location">Locations</label>
          <SelectOption
            id={"location"}
            options={locationOptions.data?.data}
          />
        </div>
        <div className="Printer Types">
          <label className="text-sm mb-2 font-semibold block" htmlFor="type">Printer Types</label>
          <SelectOption
            id="type"
            options={printerTypeOptions?.data}
          />
        </div>
        <div className="Technician in charge of the hardware">
          <label className="text-sm mb-2 font-semibold block" htmlFor="hardware">Technician in charge of the hardware</label>
          <SelectOption
            id={"hardware"}
            options={userInChargeOptions.data?.data}
          />
        </div>
        <div className="Manufacturers">
          <label className="text-sm mb-2 font-semibold block" htmlFor="manufacturer">Manufacturers</label>
          <SelectOption
            id="manufacturer"
            options={manufacturerOptions.data?.data}
          />
        </div>
        <div className="Group in charge of the hardware">
          <label className="text-sm mb-2 font-semibold block" htmlFor="group-hardware">Group in charge of the hardware</label>
          <SelectOption
            id={"group-hardware"}
            options={groupInChargeOptions.data?.data}
          />
        </div>
        <div className="Model">
          <label className="text-sm mb-2 font-semibold block" htmlFor="model">Model</label>
          <SelectOption
            id="model"
            options={printerModelOptions?.data}
          />
        </div>
        <div className="Alternate Username Number">
          <label className="text-sm mb-2 font-semibold block" htmlFor="alternativeusernamenumber">Alternate Username Number</label>
          <TextInput
            id={"alternativeusernamenumber"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>
        <div className="Serial Number">
          <label className="text-sm mb-2 font-semibold block" htmlFor="serialnumber">Serial Number</label>
          <TextInput
            id={"serialnumber"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>
        <div className="Alternate Username">
          <label className="text-sm mb-2 font-semibold block" htmlFor="alternativeusername">Alternate Username</label>
          <TextInput
            id={"alternativeusername"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>
        <div className="Inventory Number">
          <label className="text-sm mb-2 font-semibold block" htmlFor="otherserial">Inventory Number</label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>
        <div className="System description">
          <label className="text-sm mb-2 font-semibold block" htmlFor="sysdescr">System description</label>
          <TextArea
            id={"sysdescr"}
            rows={3}
          />
        </div>
        <div className="SNMP credential">
          <label className="text-sm mb-2 font-semibold block" htmlFor="snmpcredential">SNMP credential</label>
          <SelectOption
            id="snmpcredential"
            options={snpmCredentialOptions.data?.data}
          />
        </div>
        <div className="User">
          <label className="text-sm mb-2 font-semibold block" htmlFor="user">User</label>
          <SelectOption
            id="user"
            options={usersOptions.data?.data}
          />
        </div>
        <div className="Managment Type">
          <label className="text-sm mb-2 font-semibold block" htmlFor="managmenttype">Managment Type</label>
          <SelectOption
            id="managmenttype"
            options={managementTypeOptions}
          />
        </div>
        <div className="Network">
          <label className="text-sm mb-2 font-semibold block" htmlFor="network">Network</label>
          <SelectOption
            id="network"
            options={networkOptions.data?.data}
          />
        </div>
        <div className="Groups">
          <label className="text-sm mb-2 font-semibold block" htmlFor="group">Groups</label>
          <SelectOption
            id="group"
            options={groupsOptions.data?.data}
          />
        </div>
        <div className="UUID">
          <label className="text-sm mb-2 font-semibold block" htmlFor="uuid">UUID</label>
          <TextInput
            id="uuid"
            placeholder="Enter your UUID here"
            required
          />
        </div>
        <div className="Comment">
          <label className="text-sm mb-2 font-semibold block" htmlFor="comment">Comment</label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>
        <div className="Update Source">
          <label className="text-sm mb-2 font-semibold block" htmlFor="updatesource">Update Source</label>
          <SelectOption
            id="updatesource"
            options={autoupdatesystemOptions.data?.data}
          />
        </div>
        <div className="Memory">
          <label className="text-sm mb-2 font-semibold block" htmlFor="memory">Memory</label>
          <TextInput
            id={"memory"}
            type={"number"}
          />
        </div>
        <div className="Initial page counter">
          <label className="text-sm mb-2 font-semibold block" htmlFor="initialpagecounter">Initial page counter</label>
          <TextInput
            id={"initialpagecounter"}
            type={"number"}
          />
        </div>
        <div className="Current counter of pages">
          <label className="text-sm mb-2 font-semibold block" htmlFor="currentcounterofpages">Current counter of pages</label>
          <TextInput
            id={"currentcounterofpages"}
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
    </div>
  );
}