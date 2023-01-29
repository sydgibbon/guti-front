import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AlertComponent = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Alert({alertType, message, open, setOpen}) {

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <AlertComponent onClose={handleClose} severity={alertType} sx={{ width: "100%" }}>
        {message}
      </AlertComponent>
    </Snackbar>
  );
}

export default Alert;
