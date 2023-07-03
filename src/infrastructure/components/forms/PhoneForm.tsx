import { useEffect, useState } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetPhonetypesSelect } from "../../hooks/Phones/useGetPhonetypesSelect";
import { useGetPhonemodelsSelect } from "../../hooks/Phones/useGetPhonemodelsSelect";
import { useGetPhonePowerSuppliesSelect } from "../../hooks/Phones/useGetPhonePowerSuppliesSelect";
import Checkbox from "../CheckBox";


export default function PhoneForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (computer.error) {
  //     alert(computer.error);
  //   }
  // }, [computer.error]);

  interface CheckboxState {
    headset: boolean;
    speaker: boolean;

  }

  const [checkboxes, setCheckboxes] = useState({
    headset: false,
    speaker: false,
  });

  const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const userInChargeOptions = useGetUserInChargeSelect();
  const usersOptions = useGetUsersSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const phoneModelOptions = useGetPhonemodelsSelect();
  const phoneTypeOptions = useGetPhonetypesSelect();
  const phonePowerSupplyTypeOptions = useGetPhonePowerSuppliesSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();

  const managementTypeOptions = [{ id: "0", name: "Unit Management" }, { id: "1", name: "Global Management" }]

  useEffect(() => {

    usersOptions.get();
    userInChargeOptions.get();
    groupsOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    phoneModelOptions.get();
    phoneTypeOptions.get();
    phonePowerSupplyTypeOptions.get();
    autoupdatesystemOptions.get();

  }, [])
  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"status"} label={"Status"}
          options={stateOptions.data?.data} />
        <SelectOption id={"location"} label={"Locations"} options={locationOptions.data?.data} />
        <SelectOption id="type" label="Phone types"
          options={phoneTypeOptions?.data} />
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"}
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id="manufacturer" label="Manufacturers"
          options={manufacturerOptions.data?.data} />
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"}
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id="model" label="Model"
          options={phoneModelOptions?.data} />

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
          id={"brand"}
          label={"Brand"}
        />

        <SelectOption id="updatesource" label="Update Source"
          options={autoupdatesystemOptions.data?.data} />

        <TextInput
          id={"number_line"}
          label="Number of Lines"
          type={"number"}
        />

        <SelectOption id="phonepowersupplytype" label="Phone Power Supply Types"
          options={phonePowerSupplyTypeOptions?.data} />

        <div className="  rounded-lg">
          <div className="mb-2 font-semibold">Ports</div>
          <div className="grid grid-cols-5 gap-2">
            <Checkbox
              id="have_headset"
              label="Headset"
              checked={checkboxes.headset}
              onChange={() => handleCheckboxChange("headset")}
            />
            <Checkbox
              id="have_hp"
              label="Speaker"
              checked={checkboxes.speaker}
              onChange={() => handleCheckboxChange("speaker")}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}