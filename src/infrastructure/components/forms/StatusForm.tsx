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
      <Form handleSubmit={handleSubmit}>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Name
          </label>
          <TextInput
            id={"testing"}
            placeholder={"ingrese su nombre"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="status"
          >
            Status
          </label>
          <SelectOption
            id={"status"}
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="location"
          >
            Locations
          </label>
          <SelectOption
            id={"location"}
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="type"
          >
            Devices Types
          </label>
          <SelectOption
            id="type"
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="hardware"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"hardware"}
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="manufacturer"
          >
            Manufacturers
          </label>
          <SelectOption
            id="manufacturer"
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group-hardware"
          >
            Group in charge of the hardware
          </label>
          <SelectOption
            id={"group-hardware"}
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="model"
          >
            Model
          </label>
          <SelectOption
            id="model"
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alternativeusernamenumber"
          >
            Alternate Username Number
          </label>
          <TextInput
            id={"alternativeusernamenumber"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="serialnumber"
          >
            Serial Number
          </label>
          <TextInput
            id={"serialnumber"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alternativeusername"
          >
            Alternate Username
          </label>
          <TextInput
            id={"alternativeusername"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="otherserial"
          >
            Inventory Number
          </label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="user"
          >
            User
          </label>
          <SelectOption
            id="user"
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="managmenttype"
          >
            Managment Type
          </label>
          <SelectOption
            id="managmenttype"
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group"
          >
            Groups
          </label>
          <SelectOption
            id="group"
            options={textOption}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="uuid"
          >
            UUID
          </label>
          <TextInput
            id="uuid"
            placeholder="Enter your UUID here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
          >
            Comments
          </label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="brand"
          >
            Brand
          </label>
          <TextInput id={"brand"} />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="updatesource"
          >
            Update Source
          </label>
          <SelectOption
            id="updatesource"
            options={textOption}
          />
        </div>
      </Form>
    </div>
  );
}
