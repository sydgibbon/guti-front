import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BsArrow90DegDown } from "react-icons/bs";
import Menu from "@mui/material/Menu";

const theme = createTheme({
  palette: {
    primary: { main: "#FFF", dark: "#E8594B" },
    action: {
      hover: "rgba(0,0,0, 0.1)",
    },
  },
  typography: {
    button: {
      fontFamily: "sans-serif",
      fontWeight: "500",
      textTransform: "none",
      border: "1px solid black",
    },
  },
});

interface DropdownMenuProps {
  title: string;
}

export default function DropdownMenu({ title }: DropdownMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="actions-button mt-4 ml-5">
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          startIcon={<BsArrow90DegDown className="w-3 h-3" />}
          color="primary"
          size="small"
          sx={{
            "&:hover": {
              backgroundColor: "primary.hover",
              color: "#FFF",
            },
          }}
        >
          {title}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </ThemeProvider>
  );
}
