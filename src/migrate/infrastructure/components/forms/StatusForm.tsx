import SelectOptionPrimary from "../Globals/SelectOption/SelectOption";
import TextArea from "../TextArea";
import TextInputPrimary from "../Globals/Inputs/TextInputPrimary";
import Form from "./Form";
import { OptionValue } from "../Globals/types";

const textOption: OptionValue[] = [
  {
    text: "Yes",
    value: "1",
  },
  {
    text: "No",
    value: "2",
  },
];

export default function StatusForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Enviando Formulario");
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

        <TextArea id={"comment"} label="Comment" rows={3} />

        <SelectOptionPrimary id={"testing"} label={"As Child of"} />

        <SelectOptionPrimary
          id={"testing"}
          label="Computers"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Monitors"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Network Devices"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Devices"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Phones"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Printers"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Licenses"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Certificates"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Enclosures"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="PDUs"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Lines"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Racks"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Versions"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Clusters"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Contracts"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Appliances"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Database instances"
          possibleOptions={textOption}
        />
        <SelectOptionPrimary
          id={"testing"}
          label="Cables"
          possibleOptions={textOption}
        />
      </Form>
    </div>
  );
}
