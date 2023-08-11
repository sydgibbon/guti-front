import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"

export default function ComputerTypeForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Computer Types"}
        iconName={"Computers"}
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
      </Form>
    </div>
  )
};
