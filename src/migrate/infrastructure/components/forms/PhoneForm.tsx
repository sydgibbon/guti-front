import SelectOptionPrimary, { OptionValue } from "../Globals/SelectOption/SelectOption";
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

export default function  PhoneForm() {
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

        <SelectOptionPrimary id={"status"} label={"Status"} />
        <SelectOptionPrimary id={"location"} label={"Location"} />
        <SelectOptionPrimary id="type" label="Type" />
        <SelectOptionPrimary id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOptionPrimary id="manufacturer" label="Manufactuter" />
        <SelectOptionPrimary id={"group-hardware"} label={"Group in charge of the hardware"} />
        <SelectOptionPrimary id="model" label="Model" />

        <TextInputPrimary
          id={"alternativeusernamenumber"}
          label="Alternate Username Number"
          placeholder="Enter your Alternate Username number here"
          required
        />
        <TextInputPrimary
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInputPrimary
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
        />
        <TextInputPrimary
          id={"otherserial"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
          required
        />

        <SelectOptionPrimary id="user" label="User" />
        <SelectOptionPrimary id="managmenttype" label="Managment Type" />
        <SelectOptionPrimary id="group" label="Group" />

        <TextInputPrimary
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
        />

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <TextInputPrimary
          id={"brand"}
          label={"Brand"}
        />

        <SelectOptionPrimary id="updatesource" label="Update Source" />

        <TextInputPrimary
          id={"numberoflines"}
          label="Number Of Lines"
        />

        <SelectOptionPrimary id="phonepowersupplytype" label="Phone Power Supply Type" />
        
        <TextArea
          id={"ports"}
          label={"Ports"}
          placeholder={"Aca van los checkbox"}
          rows={2}
        />
      </Form>
    </div>
  );
}