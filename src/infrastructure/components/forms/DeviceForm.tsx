import { useEffect } from "react";
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

export default function DeviceForm() {
  // const computer = useCreateComputer();

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
  const monitorModelOptions = useGetMonitormodelsSelect();
  const monitorTypeOptions = useGetMonitortypesSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();
  const deviceModelOptions = useGetDevicemodelsSelect();
  const deviceTypeOptions = useGetDevicetypesSelect();

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
    monitorModelOptions.get();
    monitorTypeOptions.get();
    autoupdatesystemOptions.get();
    deviceModelOptions.get();
    deviceTypeOptions.get();
  }, []);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>

        <div>
          <label className="text-sm mb-2 font-semibold block">Name</label>
          <TextInput
            id={"testing"}
            placeholder={"ingrese su nombre"}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Status</label>
          <SelectOption
            id={"status"}
            options={stateOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Locations</label>
          <SelectOption
            id={"location"}
            options={locationOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Devices Types</label>
          <SelectOption
            id="type"
            options={deviceTypeOptions?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Technician in charge of the hardware</label>
          <SelectOption
            id={"hardware"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Manufacturers</label>
          <SelectOption
            id="manufacturer"
            options={manufacturerOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Group in charge of the hardware</label>
          <SelectOption
            id={"group-hardware"}
            options={groupInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Model</label>
          <SelectOption
            id="model"
            options={deviceModelOptions?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Alternate Username Number</label>
          <TextInput
            id={"alternativeusernamenumber"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Serial Number</label>
          <TextInput
            id={"serialnumber"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Alternate Username</label>
          <TextInput
            id={"alternativeusername"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Inventory Number</label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">User</label>
          <SelectOption
            id="user"
            options={usersOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Managment Type</label>
          <SelectOption
            id="managmenttype"
            options={managementTypeOptions}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Groups</label>
          <SelectOption
            id="group"
            options={groupsOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">UUID</label>
          <TextInput
            id="uuid"
            placeholder="Enter your UUID here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Comments</label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Brand</label>
          <TextInput
            id={"brand"}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Update Source</label>
          <SelectOption
            id="updatesource"
            options={autoupdatesystemOptions.data?.data}
          />
        </div>
      </Form>
    </div>
  );
}
