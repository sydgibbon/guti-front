import { useEffect } from "react";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetEnclosuremodelsSelect } from "../../hooks/Enclosures/useGetEnclosuremodelsSelect";

export default function  EnclosuresForm() {
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
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const enclosureModelOptions = useGetEnclosuremodelsSelect();

    useEffect(() => {
      userInChargeOptions.get();
      groupInChargeOptions.get();
      locationOptions.get();
      stateOptions.get();
      manufacturerOptions.get();
      enclosureModelOptions.get();
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
        <SelectOption id={"location"} label={"Location"} options={locationOptions.data?.data} />
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} 
          options={userInChargeOptions.data?.data}
        />     
        <SelectOption id="manufacturer" label="Manufacturer" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} 
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id="model" label="Model" 
          options={enclosureModelOptions?.data}/>

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInput
          id={"otherserial"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
          required
        />
        <TextArea
          id={"comment"}
          label="Comment" 
          rows={3}
        />
        <TextInput
          id={"power_supplies"}
          label="Power supplies"
          type={"number"}
        />

      </Form>
    </div>
  );
}