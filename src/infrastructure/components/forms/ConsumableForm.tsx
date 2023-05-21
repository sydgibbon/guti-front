import { useEffect } from "react";
import { useGetConsumabletypesSelect } from "../../hooks/Consumables/useGetCartridgetypesSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

export default function  ConsumableForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const userInChargeOptions = useGetUserInChargeSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const consumableTypeOptions = useGetConsumabletypesSelect();

  useEffect(() => {
    
    userInChargeOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    manufacturerOptions.get();
    consumableTypeOptions.get();

  }, [])


  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"location"} label={"Location"} options={locationOptions.data?.data} />
        <SelectOption id="type" label="Type" 
          options={consumableTypeOptions?.data}/>

        <TextInput
          id={"reference"}
          label={"Reference"}
        />


        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} 
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id="manufacturer" label="Manufacturer" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} 
          options={groupInChargeOptions.data?.data}
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
          id={"alertthreshold"}
          label={"Alert Threshold"}
        />

        <SelectOption id={"pictures"} label={"Pictures"} />

        <TextInput
          id={"stocktarget"}
          label="Stock Target"
        />

      </Form>
    </div>
  );
}