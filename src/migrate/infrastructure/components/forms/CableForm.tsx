import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

export default function RefactorCableFormTemplate() {
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
          id={"name"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
        />

        <SelectOption id={"status"} label={"Status"} />
        <SelectOption id={"cabletypes"} label="Type" />
        <SelectOption id={"user_tech"} label={"Technician in charge of the hardware"} />

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

        <SelectOption id={"cablestrands"} label="Cable strand" />

        <TextInput
          id={"color"}
          label={"Color"}
          placeholder={"Aca se eligen los colores"}
        />

        <SelectOption id={"items_endpoint_a"} label="Asset" />
        <SelectOption id={"items_endpoint_b"} label="Asset" />

        <SelectOption id={"socketmodels_endpoint_a"} label="Socket Model" />
        <SelectOption id={"socketmodels_endpoint_b"} label="Socket Model" />

        <SelectOption id={"sockets_endpoint_a"} label="Socket" />
        <SelectOption id={"sockets_endpoint_b"} label="Socket" />
        
      </Form>
    </div>
  );
}