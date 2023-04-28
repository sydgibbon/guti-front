import SelectOption from "../SelectOption";
import TextInput from "../TextInput";
import Form from "./Form";

export default function  SimCardForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>

        <SelectOption id={"component"} label={"Component"} />

        <TextInput
          id={"pin"}
          label="PIN Code"
          required
        />
        <TextInput
          id={"pin2"}
          label="PIN2 Code"
          required
        />
        <TextInput
          id={"puk"}
          label="PUK Code"
          required
        />
        <TextInput
          id={"puk2"}
          label="PUK2 Code"
          required
        />

        <SelectOption id={"line"} label={"Line"} />

        <TextInput
          id={"mobilesuscriber"}
          label="Mobile Subscriber Identification Number"
        />

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
        />
        <TextInput
          id={"inventoryassetnumber"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
        />

        <SelectOption id="locations" label="Location" />
        <SelectOption id="status" label="Status" />
        <SelectOption id="user" label="User" />
        <SelectOption id="group" label="Group" />

      </Form>
    </div>
  );
}