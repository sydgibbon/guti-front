import SelectOptionPrimary from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";

export default function  LocationForm() {
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

        <TextArea
          id={"comment"}
          label="Comment"
          rows={3}
        />

        <SelectOptionPrimary id={"testing"} label={"As Child of"} />

        <TextInputPrimary id={"testing"} label={"Address"}  />
        <TextInputPrimary id={"testing"} label={"Postal code"}  />
        <TextInputPrimary id={"testing"} label={"Town"}  />
        <TextInputPrimary id={"testing"} label={"State"}  />
        <TextInputPrimary id={"testing"} label={"Country"}  />
        <TextInputPrimary id={"testing"} label={"Building number"}  />
        <TextInputPrimary id={"testing"} label={"Room number"}  />
        <TextInputPrimary id={"testing"} label={"Latitude"}  />
        <TextInputPrimary id={"testing"} label={"Longitude"}  />
        <TextInputPrimary id={"testing"} label={"Altitude"}  />
 
      </Form>
    </div>
  );
}