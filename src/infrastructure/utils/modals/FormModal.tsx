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
    ><Box className="max-w-6xl mt-6 mx-auto rounded-lg relative">
        <div className='mx-6 py-4 px-5 absolute top-0 right-0'>
          <button onClick={handleClose}>X</button>
        </div>
      {form}
      </Box >
    </Modal>
  )
}

export default FormModal