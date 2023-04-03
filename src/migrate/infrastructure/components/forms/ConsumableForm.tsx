import SelectOptionPrimary from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";

export default function  ConsumableForm() {
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

        <SelectOptionPrimary id={"location"} label={"Location"} />
        <SelectOptionPrimary id="type" label="Type" />

        <TextInputPrimary
          id={"reference"}
          label={"Reference"}
        />


        <SelectOptionPrimary id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOptionPrimary id="manufacturer" label="Manufactuter" />
        <SelectOptionPrimary id={"group-hardware"} label={"Group in charge of the hardware"} />

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

        <TextInputPrimary
          id={"alertthreshold"}
          label={"Alert Threshold"}
        />

        <SelectOptionPrimary id={"pictures"} label={"Pictures"} />

        <TextInputPrimary
          id={"stocktarget"}
          label="Stock Target"
        />

      </Form>
    </div>
  );
}