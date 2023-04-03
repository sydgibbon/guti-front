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

export default function  GroupForm() {
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

        <SelectOptionPrimary id={"testing"} label={"As Child of"} />

        <SelectOptionPrimary id={"testing"} label="Requester" possibleOptions={textOption} />
        <SelectOptionPrimary id={"testing"} label="Watcher" possibleOptions={textOption} />
        <SelectOptionPrimary id={"testing"} label="Assigned to" possibleOptions={textOption} />
        <SelectOptionPrimary id={"testing"} label="Task" possibleOptions={textOption} />
        <SelectOptionPrimary id={"testing"} label="Can be notified" possibleOptions={textOption} />

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <SelectOptionPrimary id={"testing"} label="Can be manager" possibleOptions={textOption} />
        <SelectOptionPrimary id={"testing"} label="Items" possibleOptions={textOption} />
        <SelectOptionPrimary id={"testing"} label="Users" possibleOptions={textOption} />

      </Form>
    </div>
  );
}