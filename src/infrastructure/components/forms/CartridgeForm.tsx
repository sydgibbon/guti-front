import { useEffect } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetCartridgetypesSelect } from "../../hooks/Cartridges/useGetCartridgetypesSelect";

export default function  CartridgeForm() {
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
  const manufacturerOptions = useGetManufacturersSelect();
  const cartridgeTypeOptions = useGetCartridgetypesSelect();

  useEffect(() => {
    
    userInChargeOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    manufacturerOptions.get();
    cartridgeTypeOptions.get();

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
          options={cartridgeTypeOptions?.data}/>
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