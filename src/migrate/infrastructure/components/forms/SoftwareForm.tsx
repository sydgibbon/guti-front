import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

// const textOption: OptionValue[] = [{
//   text: "Boca",
//   value: "boca"
// },
// {
//   text: "River",
//   value: "river"
// }]

export default function RefactorSoftwareFormTemplate() {
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
        <SelectOption id={"childof"} label={"As child of"} />
        <SelectOption id={"location"} label={"Location"} />
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOption id={"publisher"} label={"Publisher"} />
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} />
        <SelectOption id={"user"} label={"User"} />

        <TextArea
          id={"comment"}
          label={"Comment"}
          placeholder="Enter your comment here"
          rows={3}
        />
        <TextArea
          id={"group"}
          label={"Upgrade"}
          placeholder={"Aca va un checkbox"}
          rows={2}
        />
        <SelectOption id={"softwarecategories"} label={"Software Category"} />
      </Form>
    </div>
  );
}
