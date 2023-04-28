import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

const textOption: OptionValue[] = [
  {
    text: "North",
    value: "1"
  },
  {
    text: "South",
    value: "2"
  },
  {
    text: "East",
    value: "3"
  },
  {
    text: "West",
    value: "4"
  }]

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
        <SelectOption id="serverroom" label="Server Room" />
        <SelectOption id={"room_orientation"} label="Door orientation in room" options={textOption} />

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