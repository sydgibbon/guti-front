import { ReactComponentElement, useEffect, useState } from "react"
import { Box, Modal } from "@mui/material";
import Form from "../../components/forms/Form";
interface FormModalProps {
  title: string;
  form: any;

}
const FormModal = ({title, form}:FormModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    setShowModal(true)
  }, [form])
  
  return (
    <Modal open={showModal} onClose={handleClose}
    ><Box>
      {form}
      </Box>
    </Modal>
  )
}

export default FormModal