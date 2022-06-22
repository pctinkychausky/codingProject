import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import "./navbar.css";

function narbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      white: {
        main: "#FFFFFF",
        contrastText: "#fff",
      },
      grey: {
        main: "#dddde5",
      },

      dark: {
        main: "#444560",
      },
    },
  });

  const styles = {
    paddingLeft: "0px",
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
          <AppBar position="relative" color="white" sx={{ px: 8, height: 115 }}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mx: -3,
              }}
            >
              <Typography
                color="primary"
                variant="h3"
                component="div"
                sx={{ flexGrow: 0, fontWeight: 500 }}
              >
                Rental.com
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: 270,
                }}
              >
                <Button variant="outlined" color="primary">
                  English (UK) £ GBP
                </Button>
                <Button variant="outlined" color="primary">
                  Log in
                </Button>
              </Typography>
            </Toolbar>
            <div style={styles}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" startIcon={<HotelOutlinedIcon />}>
                  Hotels
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DirectionsCarFilledOutlinedIcon />}
                >
                  Car Hire
                </Button>
              </Stack>
            </div>
          </AppBar>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default narbar;
