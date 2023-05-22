import { useRef, useEffect } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useCreateMonitors } from "../../hooks/Monitors/useCreateMonitors";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetMonitormodelsSelect } from "../../hooks/Monitors/useGetMonitormodelsSelect";
import { useGetMonitortypesSelect } from "../../hooks/Monitors/useGetMonitortypesSelect";


export default function  MonitorForm() {
  const monitors = useCreateMonitors();
  
  // Forms Referencias 
  const monitorName = useRef("")
  const AlternateUsername = useRef("")
  const AlternateUsernameNumber = useRef("")
  const SerialNumber = useRef("")
  const InventoryNumber = useRef("")
  const User = useRef("")
  const Size = useRef("")
  const UUID = useRef("")
  const Comment = useRef("")
  const Upgrade = useRef()

  const formsMonitors = {
    name: monitorName.current,
    alternateUsername: AlternateUsername.current,
    serialNumber: SerialNumber.current,
    alternateUsernameNumber: AlternateUsernameNumber.current,
    inventoryNumber: InventoryNumber.current,
    user: User.current,
    size: Size.current,
    uuid: UUID.current,
    comment: Comment.current,
    upgrade: Upgrade.current,
  }

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

  const managementTypeOptions = [{id:"0", name:"Unit Management"},{id:"1", name:"Global Management"}]
  

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    monitors.post(formsMonitors)
  };

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
  
  }, [])
  

  useEffect(() => {
    if (monitors.error) {
      alert(monitors.error);
    }
  }, [monitors.error]);


  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
          inputRef={monitorName}
        />

        <SelectOption id={"status"} label={"Status"}
          options={stateOptions.data?.data} />
        <SelectOption id={"location"} label={"Location"} options={locationOptions.data?.data} />
        <SelectOption id="type" label="Type" 
          options={monitorTypeOptions?.data}/>
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"}
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id="manufacturer" label="Manufacturer"
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} 
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id="model" label="Model" 
          options={monitorModelOptions?.data}/>

        <TextInput
          id={"alternativeusernamenumber"}
          label="Alternate Username Number"
          placeholder="Enter your Alternate Username number here"
          required
          inputRef={AlternateUsernameNumber}
        />
        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
          inputRef={SerialNumber}
        />
        <TextInput
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
          inputRef={AlternateUsername}
        />
        <TextInput
          id={"otherserial"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
          required
          inputRef={InventoryNumber}
        />

        <SelectOption id="user" label="User" 
          options={usersOptions.data?.data} />
        <SelectOption id="is_global" label="Management Type"
          options={managementTypeOptions} />

        <TextInput
          id={"size"}
          label="Size"
          inputRef={Size}
        />

        <SelectOption id="group" label="Group" 
          options={groupsOptions.data?.data}
         />

        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
          inputRef={UUID}
        />
        <TextArea id={"comment"}
          label={"Comment"}
          placeholder="Enter your comment here"
          rows={3}
        />
        <SelectOption id="updatesource" label="Update Source" 
          options={autoupdatesystemOptions.data?.data}/>
        
        <TextArea id={"group"}
          label={"Upgrade"}
          placeholder={"Aca va un checkbox"}
          rows={2} />
      </Form>
    </div>
  );
}