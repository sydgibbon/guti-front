import { useEffect, useState } from "react";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetCabletypesSelect } from "../../hooks/Cables/useGetCabletypesSelect";
import { useGetCablestrandsSelect } from "../../hooks/Cables/useGetCablestrandsSelect";
import { useGetSocketmodelsSelect } from "../../hooks/Cables/useGetSocketmodelsSelect";
import { useGetSocketsSelect } from "../../hooks/Cables/useGetSocketsSelect";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";

export default function CableForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (computer.error) {
  //     alert(computer.error);
  //   }
  // }, [computer.error]);

  const stateOptions = useGetStatesSelect();
  const cabletypesOption = useGetCabletypesSelect();
  const userInChargeOptions = useGetUserInChargeSelect();
  const cablestrandsOption = useGetCablestrandsSelect();
  const socketmodelsOption = useGetSocketmodelsSelect();
  const socketOption = useGetSocketsSelect();

  const assetOption = [{id:"0", name:"Computers"},{id:"1", name:"Network Devices"},{id:"3", name:"Devices"},{id:"4", name:"Phones"},{id:"5", name:"Printers"},{id:"6", name:"Passive Devices"}]

  const [assetSelectA, setAssetSelectA] = useState<any>([]);
  const [assetSelectB, setAssetSelectB] = useState<any>([]);

  useEffect(() => {

    stateOptions.get();
    cabletypesOption.get();
    userInChargeOptions.get();
    cablestrandsOption.get();
    socketmodelsOption.get();
    socketOption.get();

  }, [])


  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"name"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption
          id={"status"}
          label={"Status"}
          options={stateOptions.data?.data}
        />
        <SelectOption
          id={"cabletypes"}
          label="Type"
          options={cabletypesOption?.data}
        />
        <SelectOption
          id={"user_tech"}
          label={"Technician in charge of the hardware"}
          options={userInChargeOptions.data?.data}
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

        <SelectOption
          id={"cablestrands"}
          label="Cable strand"
          options={cablestrandsOption?.data}
          />

        <TextInput
          id={"color"}
          label={"Color"}
          placeholder={"Aca se eligen los colores"}
        />

        <SelectOption id={"items_endpoint_a"} label="Asset" options={assetOption}/>
        <SelectOption id={"items_endpoint_b"} label="Asset" options={assetOption}/>
        <SelectOption id={"items_endpoint_a"} label="" options={assetSelectA}/>
        <SelectOption id={"items_endpoint_b"} label="" options={assetSelectB}/>

        <SelectOption id={"socketmodels_endpoint_a"} label="Socket Model" options={socketmodelsOption?.data}/>
        <SelectOption id={"socketmodels_endpoint_b"} label="Socket Model" options={socketmodelsOption?.data}/>

        <SelectOption id={"sockets_endpoint_a"} label="Socket" options={socketOption?.data}/>
        <SelectOption id={"sockets_endpoint_b"} label="Socket" options={socketOption?.data}/>

      </Form>
    </div>
  );
}