import { useEffect } from "react";
import SelectOption from "../SelectOption";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetDevicesimcardsSelect } from "../../hooks/Simcards/useGetDevicesimcardsSelect";
import { useGetLinesSelect } from "../../hooks/Simcards/useGetLinesSelect";


export default function SimCardForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const usersOptions = useGetUsersSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const groupsOptions = useGetGroupsSelect();
  const linesOptions = useGetLinesSelect();
  const devicesimcardsOptions = useGetDevicesimcardsSelect();

  useEffect(() => {
    usersOptions.get();
    groupsOptions.get();
    locationOptions.get();
    stateOptions.get();
    linesOptions.get();
    devicesimcardsOptions.get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>

        <SelectOption
          id={"component"}
          label={"Component"}
          options={devicesimcardsOptions?.data}
        />

        <TextInput
          id={"pin"}
          label="PIN Code"
          required
        />
        <TextInput
          id={"pin2"}
          label="PIN2 Code"
          required
        />
        <TextInput
          id={"puk"}
          label="PUK Code"
          required
        />
        <TextInput
          id={"puk2"}
          label="PUK2 Code"
          required
        />

        <SelectOption
          id={"line"}
          label={"Line"}
          options={linesOptions?.data}
        />

        <TextInput
          id={"mobilesuscriber"}
          label="Mobile Subscriber Identification Number"
        />

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
        />
        <TextInput
          id={"inventoryassetnumber"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
        />

        <SelectOption
          id="locations"
          label="Location"
          options={locationOptions.data?.data}
        />
        <SelectOption
          id="status"
          label="Status"
          options={stateOptions.data?.data}
        />
        <SelectOption
          id="user"
          label="User"
          options={usersOptions.data?.data}
        />
        <SelectOption
          id="group"
          label="Group"
          options={groupsOptions.data?.data}
        />

      </Form>
    </div>
  );
}
