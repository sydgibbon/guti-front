import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TbPlus, TbList, TbMap } from "react-icons/tb";

function LocationsSubFormFE99() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const botonAbrir = () => {
    return (
      //  <div onClick={handleOpen} className="h-10 w-10 bg-primary-light">RRR</div>
      <div onClick={handleOpen} className="h-10 border border-secondary-dark flex items-center">
        <TbList className="mx-2" />
      </div>
    )
  };

  return (
    <div>
      {botonAbrir()}
      <Modal open={open} onClose={handleClose}>
        <div className="absolute p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500">
          <p>hooooola</p>
          <span>Si ves esto, es una prueba nomas, despues lo pongo bonito :D </span>
        </div>
      </Modal>
    </div>
  )
}

export default LocationsSubFormFE99