import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

const textOption: OptionValue[] = [
  {
    name: "Yes",
    id: "1"
  },
  {
    name: "No",
    id: "2"
  }]


export default function  SimCardComponentForm() {
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

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <SelectOption id="manufacturer" label="Manufactuter" />
        <SelectOption id="type" label="Type" />

        <TextInput
          id={"voltage"}
          label="Voltage"
        />

        <SelectOption id={"testing"} label={"Allow VOIP"} options={textOption} />

      </Form>
    </div>
  );
}