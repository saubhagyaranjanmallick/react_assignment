import * as React from "react";
import Avatar from "@mui/material/Avatar";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const theme = createTheme();


export default function Loginpage() {
  const notify = () => toast("Login Sucessfully !");

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: "url(https://wallpaperaccess.com/full/1657789.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid
            item
            xs={6}
            sm={8}
            md={5}
            ml={44}
            mt={10}
            component={Paper}
            elevation={6}
            
          >
            <Container maxWidth="sm" style={{ m:2 }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },

                  
                }}
                noValidate
                
              >
                <LockIcon color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1, mb: 2 }}
                >
                  <b>Login</b>
                </Typography>
                <TextField
                  
                  label="User Name"
                  variant="outlined"
                  type="text"
                  name="User Name"
                  fullWidth
                />
                <TextField
                  autoComplete="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                 
                  fullWidth
                  options={top5Orgs}
                  renderInput={(params) => (
                    <TextField {...params} label="Organisations" />
                  )}
                />
                <Button
                  variant="contained"
                  size="medium"
                  color="success"
                  endIcon={<LoginIcon />}
                  fullWidth
                  mt="2"
                  onClick={notify}
                  
                >
                  <ToastContainer />
                  Proceed
                </Button>
              </Box>
              
            </Container>

          </Grid>
          
          <Copyright  sx={{ mt: 5,color:'white' }}/>
          <Version  sx={{ mb: 8,color:'white'  }}/>
         
          
        </Grid>
       
      </Grid>
      
    </ThemeProvider>
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
      <Typography
      variant="body2" color="text.secondary" ml={5} 
      {...props}>
        {"Copyright ©  STL 2021-22 All Rights Reserved"}
      </Typography>
      
    );
  }
  function Version (props) {
    return (
      <Typography
      variant="body2" color="text.secondary" mr={6} align="right"
      {...props}>
        {"Current Version 2.3"}
      </Typography>
      
    );
  }
 