import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

export default function  NetDeviceForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Enviando Formulario')
  };

  // useEffect(() => {
  //   if (computer.error) {
  //     alert(computer.error);
  //   }
  // }, [computer.error]);


  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"status"} label={"Status"} />
        <SelectOption id={"location"} label={"Location"} />
        <SelectOption id="type" label="Type" />
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOption id="manufacturer" label="Manufactuter" />
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} />
        <SelectOption id="model" label="Model" />

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
        <TextArea
          id={"sysdescr"}
          label="Sysdescr"
          rows={3}
        />
        <SelectOption id="snmpcredential" label="SNMP credential" />
        <SelectOption id="user" label="User" />
        <SelectOption id="network" label="Network" />
        <SelectOption id="group" label="Group" />

        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
        />
        <TextArea
          id={"comment"}
          label="Comment" 
          rows={3}
        />
        <TextInput
          id={"memory"}
          label="Memory (Mio)"
        />
        <SelectOption id="updatesource" label="Update Source" />
      </Form>
    </div>
  );
}