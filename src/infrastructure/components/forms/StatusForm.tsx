import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";

const textOption: OptionValue[] = [
  {
    name: "Yes",
    id: "1",
  },
  {
    name: "No",
    id: "2",
  },
];

export default function StatusForm() {
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
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Statuses of items"}
        iconName={"Status"}
      >
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

        <SelectOption
          id={"testing"}
          label={"As Child of"}
        />

        <SelectOption
          id={"testing"}
          label="Computers"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Monitors"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Network Devices"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Devices"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Phones"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Printers"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Licenses"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Certificates"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Enclosures"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="PDUs"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Lines"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Racks"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Versions"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Clusters"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Contracts"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Appliances"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Database instances"
          options={textOption}
        />
        <SelectOption
          id={"testing"}
          label="Cables"
          options={textOption}
        />
      </Form>
    </div>
  );
}
