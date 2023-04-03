import SelectOptionPrimary from "../Globals/SelectOption/SelectOption";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";

export default function  SimCardForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Enviando Formulario')
  };

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>

        <SelectOptionPrimary id={"component"} label={"Component"} />

        <TextInputPrimary
          id={"pin"}
          label="PIN Code"
          required
        />
        <TextInputPrimary
          id={"pin2"}
          label="PIN2 Code"
          required
        />
        <TextInputPrimary
          id={"puk"}
          label="PUK Code"
          required
        />
        <TextInputPrimary
          id={"puk2"}
          label="PUK2 Code"
          required
        />

        <SelectOptionPrimary id={"line"} label={"Line"} />

        <TextInputPrimary
          id={"mobilesuscriber"}
          label="Mobile Subscriber Identification Number"
        />

        <TextInputPrimary
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
        />
        <TextInputPrimary
          id={"inventoryassetnumber"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
        />

        <SelectOptionPrimary id="locations" label="Location" />
        <SelectOptionPrimary id="status" label="Status" />
        <SelectOptionPrimary id="user" label="User" />
        <SelectOptionPrimary id="group" label="Group" />

      </Form>
    </div>
  );
}