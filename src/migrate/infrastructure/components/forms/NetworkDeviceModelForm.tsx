import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

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

export default function  NetworkDeviceModelForm() {
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

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <TextInput
          id={"testing"}
          label={"Product Number"}
        />

        <TextInput
          id={"testing"}
          label={"Weight"}
        />

        <TextInput
          id={"testing"}
          label={"Required units"}
        />

        <SelectOption id={"testing"} label={"Depth"} options={numberOption} />

        <TextInput
          id={"testing"}
          label={"Power connections"}
        />

        <TextInput
          id={"testing"}
          label={"Power consumption"}
        />

        <SelectOption id={"testing"} label={"Is half rack"} options={textOption} />

      </Form>
    </div>
  );
}