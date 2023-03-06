import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

export default function RefactorLocationFormTemplate() {
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

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <SelectOption id={"testing"} label={"As Child of"} />

        <TextInput id={"testing"} label={"Address"}  />
        <TextInput id={"testing"} label={"Postal code"}  />
        <TextInput id={"testing"} label={"Town"}  />
        <TextInput id={"testing"} label={"State"}  />
        <TextInput id={"testing"} label={"Country"}  />
        <TextInput id={"testing"} label={"Building number"}  />
        <TextInput id={"testing"} label={"Room number"}  />
        <TextInput id={"testing"} label={"Latitude"}  />
        <TextInput id={"testing"} label={"Longitude"}  />
        <TextInput id={"testing"} label={"Altitude"}  />
 
      </Form>
    </div>
  );
}