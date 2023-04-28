import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

export default function  ConsumableForm() {
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

        <SelectOption id={"location"} label={"Location"} />
        <SelectOption id="type" label="Type" />

        <TextInput
          id={"reference"}
          label={"Reference"}
        />


        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOption id="manufacturer" label="Manufactuter" />
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} />

        <TextInput
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

        <TextInput
          id={"alertthreshold"}
          label={"Alert Threshold"}
        />

        <SelectOption id={"pictures"} label={"Pictures"} />

        <TextInput
          id={"stocktarget"}
          label="Stock Target"
        />

      </Form>
    </div>
  );
}