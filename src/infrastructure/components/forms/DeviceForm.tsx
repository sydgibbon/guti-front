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

export default function  DeviceForm() {
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

  const managementTypeOptions = [{id:"0", name:"Unit Management"},{id:"1", name:"Global Management"}]
  
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
  
  }, [])

  return (
    <div className="bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"status"} label={"Status"} 
          options={stateOptions.data?.data} />
        <SelectOption id={"location"} label={"Location"} options={locationOptions.data?.data} />
        <SelectOption id="type" label="Type" 
          options={deviceTypeOptions?.data}/>
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"}        
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id="manufacturer" label="Manufacturer" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} 
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id="model" label="Model" 
          options={deviceModelOptions?.data}/>

        <TextInput
          id={"alternativeusernamenumber"}
          label="Alternate Username Number"
          placeholder="Enter your Alternate Username number here"
          required
        />
        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInput
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
        />
        <TextInput
          id={"otherserial"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
          required
        />
        <SelectOption id="user" label="User"
          options={usersOptions.data?.data} />
        <SelectOption id="managmenttype" label="Managment Type" 
          options={managementTypeOptions} />
        <SelectOption id="group" label="Group" 
          options={groupsOptions.data?.data}
         />

        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
        />
        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />
        <TextInput
          id={"brand"}
          label={"Brand"}
        />
        <SelectOption id="updatesource" label="Update Source" 
          options={autoupdatesystemOptions.data?.data}/>
      </Form>
    </div>
  );
}