import { useEffect } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetSoftwareCategoriesSelect } from "../../hooks/Softwares/useGetSoftwareCategoriesSelect";


export default function SoftwareForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };


  const userInChargeOptions = useGetUserInChargeSelect();
  const usersOptions = useGetUsersSelect();  
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const locationOptions = useGetLocationsSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const softwarecategoryOptions = useGetSoftwareCategoriesSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();

  useEffect(() => {
    
    usersOptions.get();
    userInChargeOptions.get();
    groupsOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    manufacturerOptions.get();
    softwarecategoryOptions.get();
    autoupdatesystemOptions.get();
  
  }, [])
  

  return (
    <div className="bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />
        <SelectOption id={"childof"} label={"Here comes a checkbox"} />
        <SelectOption id={"location"} label={"Location"} options={locationOptions.data?.data} />
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} 
          options={userInChargeOptions.data?.data}
        />
        <SelectOption id={"publisher"} label={"Publisher"} 
          options={manufacturerOptions.data?.data}/>
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"}
          options={groupInChargeOptions.data?.data}
        />
        <SelectOption id={"user"} label={"User"} 
          options={usersOptions.data?.data} />
        <SelectOption id={"groups"} label={"Group"} 
          options={groupsOptions.data?.data}
         />

        <TextArea
          id={"comment"}
          label={"Comment"}
          placeholder="Enter your comment here"
          rows={3}
        />
        <TextArea
          id={"group"}
          label={"Upgrade"}
          placeholder={"Aca va un checkbox"}
          rows={2}
        />
        <SelectOption id={"softwarecategories"} label={"Software Category"}  options={softwarecategoryOptions?.data} />
      </Form>
    </div>
  );
}
