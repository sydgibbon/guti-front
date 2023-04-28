import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { AlertProps } from "./types";

// const AlertComponent = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function Alert({ alertType, message, open, setOpen }: AlertProps) {
  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      key={"bottom right"}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    />
  );
}

export default Alert;
