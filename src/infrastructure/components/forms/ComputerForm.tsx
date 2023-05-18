import Form from "./Form";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import { useEffect } from "react";
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


export default function  ComputersForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const target = e.target as typeof e.target & {
    //   name: { value: string };
    //   locations: { value: string };
    //   uuid: { value: string };
    //   inventoryassetnumber: { value: string };
    //   alternativeusername: { value: string };
    //   alternativeusernamenumber: { value: string };
    // };

    // const data: ComputerDTO = {
    //   id: 1,
    //   name: target.name.value,
    //   locations: target.locations.value,
    //   otherserial: target.inventoryassetnumber.value,
    //   contact: target.alternativeusername.value,
    //   uuid: target.uuid.value,
    //   contact_num: target.alternativeusernamenumber.value,
    //   is_template: 0,
    //   is_deleted: 0,
    //   is_dynamic: 0,
    //   is_recursive: 0,
    //   comment: null,
    //   computermodels: null,
    //   computertypes: null,
    //   date_creation: null,
    //   date_mod: null,
    //   entities: null,
    //   groups: null,
    //   groups_tech: null,
    //   last_inventory_update: null,
    //   manufacturers: null,
    //   networks: null,
    //   serial: null,
    //   states: null,
    //   template_name: null,
    //   ticket_tco: null,
    //   users: null,
    //   users_tech: null,
    // };

    // computer.post(data);
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
        />

        <SelectOption id="locations" label="Location" options={locationOptions.data?.data} />

        <SelectOption
          id="hardware"
          label="Technician in Charge of the Hardware"
          options={userInChargeOptions.data?.data}
        />

        <SelectOption
          id="group-hardware"
          label="Group in Charge of the Hardware"
          options={groupInChargeOptions.data?.data}
        />

        <TextInput
          id={"alternativeusernamenumber"}
          label="Alternate username number"
          placeholder="Enter your alternate username number here"
          required
        />

        <TextInput
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
        />

        <SelectOption id="user" label="User"
          options={usersOptions.data?.data} />

        <SelectOption id="group" label="Group"
          options={groupsOptions.data?.data}
         />

        <TextArea
          id="comment"
          label="Comment"
          placeholder="Enter your comment here"
        />

        <SelectOption id="states" label="Status" 
          options={stateOptions.data?.data} />
        <SelectOption id="type" label="Type" 
          options={computerTypeOptions?.data}/>
        <SelectOption id="manufacturer" label="Manufactuter" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id="model" label="Model" 
          options={computerModelOptions?.data}/>

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInput
          id={"inventoryassetnumber"}
          label="Inventory/Asset Number"
          placeholder="Enter your Inventory/Asset Number here"
          required
        />
        <SelectOption id="network" label="Network" 
          options={networkOptions.data?.data}/>
        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
        />
        <SelectOption id="updatesource" label="Update Source" 
          options={autoupdatesystemOptions.data?.data}/>
      </Form>
    </div>
  );
}
