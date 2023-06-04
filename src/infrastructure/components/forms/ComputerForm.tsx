import Form from "./Form";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import { useEffect, useState } from "react";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetComputermodelsSelect } from "../../hooks/Computers/useGetComputermodelsSelect";
import { useGetComputertypesSelect } from "../../hooks/Computers/useGetComputertypesSelect";
import { useGetNetworksSelect } from "../../hooks/Networks/useGetNetworksSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useCreateComputer} from "../../hooks/Computers/useCreateComputer";

import { ComputerDTO } from "../../../domain/dto/ComputerDTO";


export default function  ComputersForm() {
  const computer = useCreateComputer();
  const [data, setData] = useState<ComputerDTO>(
    {
      name: "",
      locations: 0,
      otherserial: "",
      contact: "",
      uuid: "",
      contact_num: "",
      comment: "",
      computermodels: 0,
      computertypes: 0,
      date_creation: Date.now().toString(),
      groups: 0,
      groups_tech: "FIX THIS",
      manufacturers: 0,
      networks: 0,
      serial: "",
      states: 0,
      users: 0,
      users_tech: 0,
      autoupdatesystems: 0
    }
  );
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    computer.post(data);
  };
  
  const userInChargeOptions = useGetUserInChargeSelect();
  const usersOptions = useGetUsersSelect();  
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const computerModelOptions = useGetComputermodelsSelect();
  const computerTypeOptions = useGetComputertypesSelect();
  const networkOptions = useGetNetworksSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();

  useEffect(() => {
    usersOptions.get();
    userInChargeOptions.get();
    groupsOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    computerModelOptions.get();
    computerTypeOptions.get();
    networkOptions.get();
    autoupdatesystemOptions.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"name"}
          label="Name"
          placeholder="Enter your name here"
          required
          value={data.name || ""}
          onChange={handleChange}
        />

        <SelectOption id="locations" label="Location" options={locationOptions.data?.data}
          setValue={setData}
          value={data.locations || ""}
          onChange={handleChange} />

        <SelectOption
          id="users_tech"
          label="Technician in Charge of the Hardware"
          options={userInChargeOptions.data?.data}
          setValue={setData}
          value={data.users_tech || ""}
          onChange={handleChange}
        />

        <SelectOption
          id="groups_tech"
          label="Group in Charge of the Hardware"
          options={groupInChargeOptions.data?.data} //NEED TO FIX IN BACKEND
        />

        <TextInput
          id={"contact_num"}
          label="Alternate username number"
          placeholder="Enter your alternate username number here"
          required
          value={data.contact_num || ""}
          onChange={handleChange}
        />

        <TextInput
          id={"contact"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
          value={data.contact || ""}
          onChange={handleChange}
        />

        <SelectOption id="users" label="User"
          options={usersOptions.data?.data}
          setValue={setData}
          value={data.users || ""} 
          onChange={handleChange}/>

        <SelectOption id="groups" label="Group"
          options={groupsOptions.data?.data}
          setValue={setData}
          value={data.groups || ""}
          onChange={handleChange}
         />

        <TextArea
          id="comment"
          label="Comment"
          placeholder="Enter your comment here"
          value={data.comment || ""}
          onChange={handleChange}
        />

        <SelectOption id="states" label="Status" 
          options={stateOptions.data?.data} 
          setValue={setData}
          value={data.states || ""}
          onChange={handleChange}/>
        <SelectOption id="computertypes" label="Type" 
          options={computerTypeOptions?.data}
          setValue={setData}
          value={data.computertypes || ""}
          onChange={handleChange}
          />
        <SelectOption id="manufacturers" label="Manufacturer" 
          options={manufacturerOptions.data?.data}
          setValue={setData}
          value={data.manufacturers || ""}
          onChange={handleChange}
          />
        <SelectOption id="computermodels" label="Model" 
          options={computerModelOptions?.data}
          setValue={setData}
          value={data.computermodels || ""}
          onChange={handleChange}
          />

        <TextInput
          id={"serial"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
          value={data.serial || ""}
          onChange={handleChange}
        />
        <TextInput
          id={"otherserial"}
          label="Inventory/Asset Number"
          placeholder="Enter your Inventory/Asset Number here"
          required
          value={data.otherserial || ""}
          onChange={handleChange}
        />
        <SelectOption id="networks" label="Network" 
          options={networkOptions.data?.data}
          setValue={setData}
          value={data.networks || ""}
          onChange={handleChange}
          />
        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
          value={data.uuid || ""}
          onChange={handleChange}
        />
        <SelectOption id="autoupdatesystems" label="Update Source" 
          options={autoupdatesystemOptions.data?.data}
          setValue={setData}
          value={data.autoupdatesystems || ""}
          onChange={handleChange}
          />
      </Form>
    </div>
  );
}
