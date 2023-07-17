import { useEffect } from "react";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetPdumodelsSelect } from "../../hooks/Pdus/useGetPdumodelsSelect";
import { useGetPdutypesSelect } from "../../hooks/Pdus/useGetPdutypesSelect";

export default function  PduForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (computer.error) {
  //     alert(computer.error);
  //   }
  // }, [computer.error]);4

  const userInChargeOptions = useGetUserInChargeSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const pduModelOptions = useGetPdumodelsSelect();
  const pduTypeOptions = useGetPdutypesSelect();

    useEffect(() => {
      userInChargeOptions.get();
      groupInChargeOptions.get();
      locationOptions.get();
      stateOptions.get();
      manufacturerOptions.get();
      pduModelOptions.get();
      pduTypeOptions.get();
    }, [])
    


  return (
    <div className="bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"name"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"status"} label={"Status"} 
          options={stateOptions.data?.data} />
        <SelectOption id={"location"} label={"Locations"} options={locationOptions.data?.data} />
        <SelectOption id={"pdutypes"} label="PDU types" 
          options={pduTypeOptions?.data}/>
        <SelectOption id={"user_tech"} label={"Technician in charge of the hardware"} 
          options={userInChargeOptions.data?.data}
        />     
        <SelectOption id={"manufacturers"} label="Manufacturers" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"groups_tech"} label={"Group in charge of the hardware"} 
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id={"pdumodels"} label="Model" 
          options={pduModelOptions?.data}/>

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInput
          id={"serial"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
          required
        />
        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />
      </Form>
    </div>
  );
}