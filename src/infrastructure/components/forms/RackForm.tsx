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
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetRackmodelsSelect } from "../../hooks/Racks/useGetRackmodelsSelect";
import { useGetRacktypesSelect } from "../../hooks/Racks/useGetRacktypesSelect";
import { useGetDcroomsSelect } from "../../hooks/Racks/useGetDcroomsSelect";



export default function  RackForm() {
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
  const rackModelOptions = useGetRackmodelsSelect();
  const rackTypeOptions = useGetRacktypesSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();
  const dcRoomOptions = useGetDcroomsSelect();

  const orientationOptions: OptionValue[] = [
    {
      name: "North",
      id: "1"
    },
    {
      name: "South",
      id: "2"
    },
    {
      name: "East",
      id: "3"
    },
    {
      name: "West",
      id: "4"
    }]

    useEffect(() => {
    
      userInChargeOptions.get();
      groupInChargeOptions.get();
      locationOptions.get();
      stateOptions.get();
      manufacturerOptions.get();
      rackModelOptions.get();
      rackTypeOptions.get();
      dcRoomOptions.get();
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
        <SelectOption id={"location"} label={"Location"} options={locationOptions.data?.data} />
        <SelectOption id="type" label="Type" 
          options={rackTypeOptions?.data}/>
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} 
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id="manufacturer" label="Manufacturer" 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"}
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id="model" label="Model" 
          options={rackModelOptions?.data}/>

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
        <SelectOption id="serverroom" label="Server Room" 
          options={dcRoomOptions?.data}/>
        <SelectOption id={"room_orientation"} label="Door orientation in room" options={orientationOptions} />

        <TextInput
          id={"numberofunits"}
          label="Number of units"
        />
        <TextInput
          id={"width"}
          label="Width"
        />
        <TextInput
          id={"height"}
          label="Height"
        />
        <TextInput
          id={"depth"}
          label="Depth"
        />
        <TextInput
          id={"maxpower"}
          label="Max. power (in watts)"
        />
        <TextInput
          id={"measuredpower"}
          label="Measured power (in watts)"
        />
        <TextInput
          id={"maxweight"}
          label="Max. weight"
        />
        <TextInput
          id={"color"}
          label={"Color"}
          placeholder={"Aca se eligen los colores"}
        />

      </Form>
    </div>
  );
}