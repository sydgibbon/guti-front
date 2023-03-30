import SelectOptionPrimary from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";
import { OptionValue } from "../Globals/types";

const textOption: OptionValue[] = [
  {
    text: "Yes",
    value: "1"
  },
  {
    text: "No",
    value: "2"
  }]


export default function  SimCardComponentForm() {
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

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <SelectOptionPrimary id="manufacturer" label="Manufactuter" />
        <SelectOptionPrimary id="type" label="Type" />

        <TextInputPrimary
          id={"voltage"}
          label="Voltage"
        />

        <SelectOptionPrimary id={"testing"} label={"Allow VOIP"} possibleOptions={textOption} />

      </Form>
    </div>
  );
}