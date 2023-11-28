import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"

export default function PrinterModelForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Printer Models"}
        iconName={"Printers"}
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
            Product Number
          </label>
          <TextInput
            id={"testing"}
          />
        </div>
      </Form>
    </>
  )
};
