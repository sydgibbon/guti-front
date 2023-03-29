import SelectOptionPrimary, { OptionValue } from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
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
        <TextInputPrimary
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOptionPrimary id={"status"} label={"Status"} />
        <SelectOptionPrimary id={"location"} label={"Location"} />
        <SelectOptionPrimary id="type" label="Type" />
        <SelectOptionPrimary id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOptionPrimary id="manufacturer" label="Manufactuter" />
        <SelectOptionPrimary id={"group-hardware"} label={"Group in charge of the hardware"} />
        <SelectOptionPrimary id="model" label="Model" />

        <TextInputPrimary
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInputPrimary
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
        <SelectOptionPrimary id="serverroom" label="Server Room" />
        <SelectOptionPrimary id={"room_orientation"} label="Door orientation in room" possibleOptions={textOption} />

        <TextInputPrimary
          id={"numberofunits"}
          label="Number of units"
        />
        <TextInputPrimary
          id={"width"}
          label="Width"
        />
        <TextInputPrimary
          id={"height"}
          label="Height"
        />
        <TextInputPrimary
          id={"depth"}
          label="Depth"
        />
        <TextInputPrimary
          id={"maxpower"}
          label="Max. power (in watts)"
        />
        <TextInputPrimary
          id={"measuredpower"}
          label="Measured power (in watts)"
        />
        <TextInputPrimary
          id={"maxweight"}
          label="Max. weight"
        />
        <TextInputPrimary
          id={"color"}
          label={"Color"}
          placeholder={"Aca se eligen los colores"}
        />

      </Form>
    </div>
  );
}