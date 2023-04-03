import SelectOptionPrimary from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";

// const textOption: OptionValue[] = [{
//   text: "Boca",
//   value: "boca"
// },
// {
//   text: "River",
//   value: "river"
// }]

export default function SoftwareForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Enviando Formulario");
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
        <SelectOptionPrimary id={"childof"} label={"As child of"} />
        <SelectOptionPrimary id={"location"} label={"Location"} />
        <SelectOptionPrimary
          id={"hardware"}
          label={"Technician in charge of the hardware"}
        />
        <SelectOptionPrimary id={"publisher"} label={"Publisher"} />
        <SelectOptionPrimary
          id={"group-hardware"}
          label={"Group in charge of the hardware"}
        />
        <SelectOptionPrimary id={"user"} label={"User"} />

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
        <SelectOptionPrimary
          id={"softwarecategories"}
          label={"Software Category"}
        />
      </Form>
    </div>
  );
}
