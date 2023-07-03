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
import AddButton from "../AddButton";
import ModalCustom from "../../components/modals/ModalCustom";
import LocationForm from "./LocationForm";



export default function ComputersForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLocationForm, setShowLocationForm] = useState(false);

  const openLocationForm = () => {
    setShowLocationForm(true);
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };


  {showLocationForm && (
    <ModalCustom
      state={showLocationForm}
      handleClose={() => setShowLocationForm(false)}
      title="Location Form"
    >
      <LocationForm />
    </ModalCustom>
  )}

  return (
    <div>
      {isOpen && (
        <ModalCustom
          state={isOpen}
          handleClose={toggleForm}
          title="Formulario"
          content="Proximamente, el formulario kease locations"
          primaryButtonText="+ Add"
          primaryButtonHandle={() => {
          }}
          secondaryButtonHandle={() => {
          }}
        />
      )}
      <div className="m-6 bg-white rounded container_form_computer">
        {showLocationForm && <LocationForm />}
        <Form handleSubmit={handleSubmit}>
          <TextInput
            id={"name"}
            label="Name"
            placeholder="Enter your name here"
            required
          />

          <div className="">
            <SelectOption
              id="locations"
              label="Location"
              options={locationOptions.data?.data}
            />
            <AddButton
              onClick={openLocationForm}
              buttonname="Add"
            />
          </div>

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
            options={computerTypeOptions?.data} />
          <SelectOption id="manufacturer" label="Manufacturer"
            options={manufacturerOptions.data?.data} />
          <SelectOption id="model" label="Model"
            options={computerModelOptions?.data} />

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
            options={networkOptions.data?.data} />
          <TextInput
            id="uuid"
            label="UUID"
            placeholder="Enter your UUID here"
            required
          />
          <SelectOption id="updatesource" label="Update Source"
            options={autoupdatesystemOptions.data?.data} />
        </Form>
      </div>
    </div>
  );
}
