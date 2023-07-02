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
import { ComputerData } from "../../../domain/models/forms/ComputerData";


export default function ComputersForm() {
  const [formData, setFormData] = useState<ComputerData>({
    name: null,
    serial: null,
    otherserial: null,
    contact: null,
    contact_num: null,
    comment: null,
    date_mod: null,
    is_template: null,
    template_name: null,
    is_deleted: null,
    is_dynamic: null,
    ticket_tco: null,
    uuid: null,
    date_creation: null,
    is_recursive: null,
    last_inventory_update: null,
    entities: null,
    users_tech: null,
    groups_tech: null,
    autoupdatesystems: null,
    locations: null,
    networks: null,
    computermodels: null,
    computertypes: null,
    manufacturers: null,
    users: null,
    groups: null,
    states: null
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
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
  }, []);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"name"}
          label="Name"
          placeholder="Enter your name here"
          required
          onChange={handleChange}
        />

        <SelectOption id="locations" label="Location" options={locationOptions.data?.data}
        onChange={handleChange} />

        <SelectOption
          id="users_tech"
          label="Technician in Charge of the Hardware"
          options={userInChargeOptions.data?.data}
          onChange={handleChange}
        />

        <SelectOption
          id="groups_tech"
          label="Group in Charge of the Hardware"
          options={groupInChargeOptions.data?.data}
          onChange={handleChange}
        />

        <TextInput
          id="contact_num"
          label="Alternate username number"
          placeholder="Enter your alternate username number here"
          required
          onChange={handleChange}
        />

        <TextInput
          id="contact"
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
          onChange={handleChange}
        />

        <SelectOption id="users" label="User"
          options={usersOptions.data?.data} 
          onChange={handleChange}/>

        <SelectOption id="groups" label="Group"
          options={groupsOptions.data?.data}
          onChange={handleChange}
        />

        <TextArea
          id="comment"
          label="Comment"
          placeholder="Enter your comment here"
          onChange={handleChange}
        />

        <SelectOption id="states" label="Status"
          options={stateOptions.data?.data} 
          onChange={handleChange} />
        <SelectOption id="computertypes" label="Type"
          options={computerTypeOptions?.data} 
          onChange={handleChange} />
        <SelectOption id="manufacturers" label="Manufacturer"
          options={manufacturerOptions.data?.data}
          onChange={handleChange} />
        <SelectOption id="computermodels" label="Model"
          options={computerModelOptions?.data}
          onChange={handleChange} />

        <TextInput
          id={"serial"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
          onChange={handleChange}
        />
        <TextInput
          id={"otherserial"}
          label="Inventory/Asset Number"
          placeholder="Enter your Inventory/Asset Number here"
          required
          onChange={handleChange}
        />
        <SelectOption id="networks" label="Network"
          options={networkOptions.data?.data}
          onChange={handleChange} />
        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
          onChange={handleChange}
        />
        <SelectOption id="autoupdatesystems" label="Update Source"
          options={autoupdatesystemOptions.data?.data}
          onChange={handleChange} />
      </Form>
    </div>
  );
}
