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

const numberOption: OptionValue[] = [
  {
    text: "1",
    value: "1"
  },
  {
    text: "1/2",
    value: "1"
  },
  {
    text: "1/3",
    value: "1"
  },
  {
    text: "1/4",
    value: "1"
  }]

export default function  PassiveDeviceModelForm() {
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

        <TextInputPrimary
          id={"testing"}
          label={"Product Number"}
        />

        <TextInputPrimary
          id={"testing"}
          label={"Weight"}
        />

        <TextInputPrimary
          id={"testing"}
          label={"Required units"}
        />

        <SelectOptionPrimary id={"testing"} label={"Depth"} possibleOptions={numberOption} />

        <TextInputPrimary
          id={"testing"}
          label={"Power connections"}
        />

        <TextInputPrimary
          id={"testing"}
          label={"Power consumption"}
        />

        <SelectOptionPrimary id={"testing"} label={"Is half rack"} possibleOptions={textOption} />

      </Form>
    </div>
  );
}