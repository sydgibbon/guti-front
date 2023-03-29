import SelectOptionPrimary, { OptionValue } from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";

export default function  PassiveDeviceForm() {
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
          id={"name"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOptionPrimary id={"status"} label={"Status"} />
        <SelectOptionPrimary id={"location"} label={"Location"} />
        <SelectOptionPrimary id={"passivedcequipmenttypes"} label="Type" />
        <SelectOptionPrimary id={"user_tech"} label={"Technician in charge of the hardware"} />
        <SelectOptionPrimary id={"manufacturers"} label="Manufactuter" />
        <SelectOptionPrimary id={"groups_tech"} label={"Group in charge of the hardware"} />
        <SelectOptionPrimary id={"pdumodels"} label="Model" />

        <TextInputPrimary
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInputPrimary
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