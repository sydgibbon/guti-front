import { useEffect } from "react";
import { useGetNetworkDevicesModelsSelect } from "../../hooks/NetworksDevices/useGetNetworkDevicesModelsSelect";
import { useGetNetworkDevicesTypesSelect } from "../../hooks/NetworksDevices/useGetNetworkDevicesTypesSelect";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetNetworksSelect } from "../../hooks/Networks/useGetNetworksSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetSnmpCredentialsSelect } from "../../hooks/SnmpCredentials/useGetSnmpCredentialsSelect";
import { number } from "yargs";

export default function  NetDeviceForm() {
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
  const networkDeviceModelOptions = useGetNetworkDevicesModelsSelect();
  const networkDeviceTypeOptions = useGetNetworkDevicesTypesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const networkOptions = useGetNetworksSelect();
  const stateOptions = useGetStatesSelect();
  const locationOptions = useGetLocationsSelect();
  const usersOptions = useGetUsersSelect();  
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();
  const snpmCredentialOptions = useGetSnmpCredentialsSelect();

  useEffect(() => {
    networkDeviceModelOptions.get();
    networkDeviceTypeOptions.get();
    userInChargeOptions.get();
    manufacturerOptions.get();
    groupInChargeOptions.get();
    groupsOptions.get();
    networkOptions.get();
    stateOptions.get();
    locationOptions.get();
    usersOptions.get();
    autoupdatesystemOptions.get();
    snpmCredentialOptions.get();
  }, [])
  

  return (
    <div className="bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"states"} label={"Status"} 
          options={stateOptions.data?.data} />
        <SelectOption id={"location"} label={"Locations"} options={locationOptions.data?.data} />
        <SelectOption id="type" label="Networking Equipment Types" 
          options={networkDeviceTypeOptions?.data}/>
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"}
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id="manufacturer" label="Manufacturers" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} 
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id="model" label="Model" 
          options={networkDeviceModelOptions?.data}/>

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
        <TextArea
          id={"sysdescr"}
          label="System description"
          rows={3}
        />
        <SelectOption id="snmpcredential" label="SNMP credential" 
          options={snpmCredentialOptions.data?.data}/>
        <SelectOption id="user" label="User" 
          options={usersOptions.data?.data} />
        <SelectOption id="network" label="Network" 
          options={networkOptions.data?.data}/>
        <SelectOption id="group" label="Groups" 
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
          label="Comments" 
          rows={3}
        />
        <TextInput
          id={"memory"}
          label="Memory (MB)"
          type={"number"}
        />
        <SelectOption id="updatesource" label="Update Source" 
          options={autoupdatesystemOptions.data?.data}/>
      </Form>
    </div>
  );
}