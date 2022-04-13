import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LockIcon from "@mui/icons-material/Lock";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

toast.configure();
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(" ");
  const [organisations, setOrganisations] = useState(" ");
  const [allEntry, setAllEntry] = useState("");
  const [proceed, setProceed] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = {
          username: username,
          password: password,
          organisations: organisations,
      };
    
    if (username == "" || password == "" || organisations == "") {
      toast.success("Login Sucessfully !");
      setTimeout(() => {
        setProceed(true);
      }, 2000);
      console.log(newEntry);
      setAllEntry([...allEntry, newEntry]);
    } else {
      toast.error("User Name Required!");
      toast.error("User Password Required!");
      toast.error("Organizations Required!");
    }
  };

  return (
    <form>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid
            item
            lg={12}
            sm={6}
            sx={{
              backgroundImage:
                "url(https://wallpaperaccess.com/full/1657789.jpg)",
              backgroundRepeat: "no-repeat",
              maxHeight: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            style={{ minHeight: "100vh" }}
          >
            <Grid container justifyContent="center">
              <Grid item lg={5.5} sm={2} mt={8} component={Paper} elevation={6}>
                <Container maxWidth="sm" style={{ m: 2 }}>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                    }}
                    noValidate
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ flexGrow: 1, mb: 2 }}
                    >
                      <LockIcon color="primary" />
                      <b>Login</b>
                    </Typography>
                    <TextField
                      label="User Name"
                      variant="outlined"
                      type="text"
                      name="username"
                      id="username"
                      onChange={(e) => setUsername(e.target.value)}
                      fullWidth
                    />
                    <TextField
                      autoComplete="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                    <Autocomplete
                      disablePortal
                      fullWidth
                      name="organisations"
                      id="organisations"
                      options={top5Orgs}
                      onChange={(e) => setOrganisations(e.target.value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Organisations"
                        />
                      )}
                    />

                    {proceed ? (
                      <Button
                        variant="contained"
                        size="medium"
                        color="success"
                        fullWidth
                        mt="2"
                        disabled
                      >
                        Processing....
                        <div class="fa fa-spinner fa-spin" />
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        size="medium"
                        color="success"
                        endIcon={<LoginIcon />}
                        fullWidth
                        mt="2"
                        onClick={submitForm}
                      >
                        <ToastContainer />
                        Proceed
                      </Button>
                    )}
                  </Box>
                </Container>
              </Grid>
            </Grid>
            <Box sx={{ mt: 12 }}>
              <Copyright sx={{ mt: 5, color: "white" }} />
              <Version sx={{ mb: 8, color: "white" }} />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </form>
  );
}

const top5Orgs = [
  { label: "CENTURION UNIVERSITY" },
  { label: "UTKAL UNIVERSITY" },
  { label: "RD UNIVERSITY" },
  { label: "FM UNIVERSITY" },
  { label: "REVENSHAW UNIVERSITY" },
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" ml={5} {...props}>
      {"Copyright ©  STL 2021-22 All Rights Reserved"}
    </Typography>
  );
}
function Version(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      mr={6}
      align="right"
      {...props}
    >
      {"Current Version 2.3"}
    </Typography>
  );
}
