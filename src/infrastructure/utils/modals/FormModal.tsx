import { ReactComponentElement, useEffect, useState } from "react"
import { Box, Modal } from "@mui/material";
import Form from "../../components/forms/Form";
interface FormModalProps {
  form: JSX.Element | "";
}
const FormModal = ({form}:FormModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    if (form != "") { setShowModal(true)}
  }, [form])
  
  return (
    <Modal open={showModal} onClose={handleClose}
    ><Box>
      <div className="max-h-screen mb-4">
      {form}
      </div>
      </Box >
    </Modal>
  )
}

export default FormModal