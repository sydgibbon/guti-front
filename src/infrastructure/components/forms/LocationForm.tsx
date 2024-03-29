import SelectOption from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"

export default function LocationForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Locations"}
        iconName={"Locations"}
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
            htmlFor="testing"
          >
            As Child of
          </label>
          <SelectOption
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Address
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Postal code
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Town
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            State
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Country
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Building number
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Room number
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Latitude
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Longitude
          </label>
          <TextInput
            id={"testing"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Altitude
          </label>
          <TextInput
            id={"testing"}
          />
        </div>
      </Form >
    </>
  )
};
