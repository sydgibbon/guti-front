import SelectOptionPrimary, { OptionValue } from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";

export default function  CableForm() {
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
          id={"name"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOptionPrimary id={"status"} label={"Status"} />
        <SelectOptionPrimary id={"cabletypes"} label="Type" />
        <SelectOptionPrimary id={"user_tech"} label={"Technician in charge of the hardware"} />

        <TextInputPrimary
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

        <SelectOptionPrimary id={"cablestrands"} label="Cable strand" />

        <TextInputPrimary
          id={"color"}
          label={"Color"}
          placeholder={"Aca se eligen los colores"}
        />

        <SelectOptionPrimary id={"items_endpoint_a"} label="Asset" />
        <SelectOptionPrimary id={"items_endpoint_b"} label="Asset" />

        <SelectOptionPrimary id={"socketmodels_endpoint_a"} label="Socket Model" />
        <SelectOptionPrimary id={"socketmodels_endpoint_b"} label="Socket Model" />

        <SelectOptionPrimary id={"sockets_endpoint_a"} label="Socket" />
        <SelectOptionPrimary id={"sockets_endpoint_b"} label="Socket" />
        
      </Form>
    </div>
  );
}