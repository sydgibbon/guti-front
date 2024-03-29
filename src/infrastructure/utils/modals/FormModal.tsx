import React, { useEffect, useState } from "react"
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
    ><Box className="max-w-6xl mx-auto outline-none relative">
          <button onClick={handleClose} className='absolute right-12 top-4'>X</button>
      {form}
      </Box >
    </Modal>
  )
}

export default FormModal