import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

export default function  PduForm() {
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
          id={"name"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"status"} label={"Status"} />
        <SelectOption id={"location"} label={"Location"} />
        <SelectOption id={"pdutypes"} label="Type" />
        <SelectOption id={"user_tech"} label={"Technician in charge of the hardware"} />
        <SelectOption id={"manufacturers"} label="Manufacturer" />
        <SelectOption id={"groups_tech"} label={"Group in charge of the hardware"} />
        <SelectOption id={"pdumodels"} label="Model" />

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInput
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