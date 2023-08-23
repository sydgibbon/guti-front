import SelectOption, { OptionValue } from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"

const textOption: OptionValue[] = [
  {
    name: "Yes",
    id: "1",
  },
  {
    name: "No",
    id: "2",
  },
]

export default function SimCardComponentForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Simcards"}
        iconName={"Simcards"}
      >
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
            htmlFor="comment"
          >
            Comment
          </label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="manufacturer"
          >
            Manufacturer
          </label>
          <SelectOption
            id="manufacturer"
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="type"
          >
            Type
          </label>
          <SelectOption
            id="type"
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="voltage"
          >
            Voltage
          </label>
          <TextInput
            id={"voltage"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Allow VOIP
          </label>
          <SelectOption
            id={"testing"}
            options={textOption}
          />
        </div>
      </Form >
    </div >
  )
};
