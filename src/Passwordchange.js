import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./App.css";
import passwordValidator from "password-validator";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { Button } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Appbar from "./Appbar";
import Erroricon from "./Icon/Erroricon.gif";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function App() {
  var schema = new passwordValidator();
  const [password, setPassword] = useState(" ");
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState(" ");
  const [ma, setMa] = useState(false);
  const [sl, setSl] = useState(false);
  const [Na, setNa] = useState(false);
  const [Sc, setSc] = useState(false);
  const [length, setLength] = useState(false);
  const [validate, setValidate] = useState(true);
  const [proceed, setProceed] = useState(false);
  const [failure, setFailure] = useState(false);
  const passwordSave = (e) => {
    setPassword(e.target.value);
  };
  const check = (e) => {
    schema
      .is()
      .min(8)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has(/[!@#$%^&*()_+\-={};':"|,.<>?]/);
    let res = schema.validate(e.target.value, { list: true });
    // console.log(res);
    setMa(true);
    setSl(true);
    setNa(true);
    setSc(true);
    setLength(true);
    if (res.length !== 0) {
      res.forEach((e) => {
        if (e === "min") {
          setLength(false);
        }
        if (e === "uppercase") {
          setMa(false);
        }
        if (e === "lowercase") {
          setSl(false);
        }
        if (e === "digits") {
          setNa(false);
        }
        if (e === "has") {
          setSc(false);
        }
      });
    }

    setNewpassword(e.target.value);
  };
  const check1 = (e) => {
    setConfirmnewpassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const requestPassword = {
      password: password,
      new_password: newpassword,
      confirm_newpassword: confirmnewpassword,
      user_code: "alokSTLIND",
      org_code: "STLIND",
    };
    console.log(requestPassword);

    axios({
      url: "https://liveexam.edusols.com/api/tassess_api.php?oper=PASSWORD_CHANGE",
      method: "POST",
      data: requestPassword,
    }).then((response) => {
      console.log(response.data);
      const result = response.data;
      if (result.status === 200) {
        if (result.status_message === "Item_Found") {
          const data = result.data;
          if (data.dbStatus === "SUCCESS") {
            setTimeout(() => {
              setValidate(false);
              setProceed(true);
            }, 3000);
          } else if (data.dbStatus === "ERROR") {
            setValidate(false);
            setFailure(true);
          }
        } else {
          toast.error("Error!Contact Support");
        }
      }
    });
  };

  return (
    <>
      <form>
        <Box>
          <Grid container justifyContent="center">
            <Grid
              item
              lg={12}
              md={6}
              sm={3}
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
              <Grid container lg={12} justifyContent="center">
                {validate ? (
                  <Grid
                    item
                    lg={9}
                    sm={4}
                    mt={10}
                    sx={{ backgroundColor: "whitesmoke" }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, mb: 2, mt: 2 }}
                    >
                      <EditIcon color="primary" />{" "}
                      <b>Change Default Password</b>
                      <Typography
                        variant="h11"
                        sx={{ flexGrow: 1, mb: 2, ml: 27 }}
                      >
                        <b>Welcome, Alok Sahoo</b>
                        <Button variant="outlined" size="small" color="warning">
                          <LogoutIcon /> LOGOUT
                        </Button>
                      </Typography>
                    </Typography>
                    <Grid container lg={10}>
                      <Grid lg={8} sm={2}>
                        <card sx={{ maxHeight: "100%", maxWidth: "80%" }}>
                          <Box m={3}>
                            <TextField
                              label="Password"
                              variant="outlined"
                              type="text"
                              name="password"
                              margin="normal"
                              onChange={(e) => passwordSave(e)}
                              fullWidth
                            />
                            <TextField
                              autoComplete="newpassword"
                              label=" New Password"
                              variant="outlined"
                              type="password"
                              name="newpassword"
                              margin="normal"
                              onChange={(e) => check(e)}
                              fullWidth
                            />

                            <TextField
                              label=" Confirm New Password"
                              variant="outlined"
                              type="password"
                              name="confirmnewpassword"
                              margin="normal"
                              onChange={(e) => check1(e)}
                              fullWidth
                            />

                            <Button
                              variant="contained"
                              size="medium"
                              color="success"
                              endIcon={<ChangeCircleIcon />}
                              fullWidth
                              mt="2"
                              type="submit"
                              margin="normal"
                              onClick={submitForm}
                            >
                              change
                            </Button>
                          </Box>
                        </card>
                      </Grid>
                      <Grid item lg={2} sm={1}>
                        <Box
                          sx={{
                            width: 250,
                            height: 320,
                            backgroundColor: "#b3e0f2",
                            "&:hover": {
                              backgroundColor: "primary.info",
                              opacity: [0.9, 0.8, 0.7],
                            },
                            mb: 3,
                            ml: 4,
                          }}
                        >
                          <Typography variant="h5">
                            <ReportIcon fontSize="medium" color="primary" />
                            New Password
                          </Typography>

                          <hr />
                          {ma ? (
                            <p>
                              <CheckCircleIcon style={{ color: "green" }} />
                              Must Have Atleast One Capital Letter
                            </p>
                          ) : (
                            <p>
                              <CancelIcon style={{ color: "red" }} />
                              Must Have Atleast One Capital Letter
                            </p>
                          )}
                          {sl ? (
                            <p>
                              <CheckCircleIcon style={{ color: "green" }} />
                              Must Have Atleast One Small Letter
                            </p>
                          ) : (
                            <p>
                              <CancelIcon style={{ color: "red" }} />
                              Must Have Atleast One Small Letter
                            </p>
                          )}
                          {Na ? (
                            <p>
                              <CheckCircleIcon style={{ color: "green" }} />
                              Must Have Atleast One Number
                            </p>
                          ) : (
                            <p>
                              <CancelIcon style={{ color: "red" }} />
                              Must Have Atleast One number
                            </p>
                          )}
                          {Sc ? (
                            <p>
                              <CheckCircleIcon style={{ color: "green" }} />
                              Must Have Atleast One Special Letter
                            </p>
                          ) : (
                            <p>
                              <CancelIcon style={{ color: "red" }} />
                              Must Have Atleast One Special Letter
                            </p>
                          )}
                          {length ? (
                            <p>
                              <CheckCircleIcon style={{ color: "green" }} />
                              Should Be Minimum 8 Character
                            </p>
                          ) : (
                            <p>
                              <CancelIcon style={{ color: "red" }} />
                              Should Be Minimum 8 Character
                            </p>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (
                  ""
                )}
                {failure ? (
                  <Card
                    sx={{
                      marginTop: "80px",
                      width: "710px",
                      height: "300px",
                      marginBottom: "161px",
                    }}
                  >
                    <Grid container justifyContent="center">
                      <Grid item lg={6} sm={3}>
                        <Typography variant="h6">
                          <b>Password Changed failed....❌</b>
                        </Typography>
                        <img src={Erroricon} />
                      </Grid>
                    </Grid>
                  </Card>
                ) : (
                  ""
                )}
                {proceed ? (
                  <Card
                    sx={{
                      marginTop: "80px",
                      width: "710px",
                      height: "300px",
                      marginBottom: "161px",
                    }}
                  >
                    <Grid container justifyContent="center">
                      <Grid item lg={6} sm={3}>
                        <CheckCircleOutlineIcon
                          style={{
                            color: "green",
                            height: "120px",
                            width: "200px",
                            marginLeft:"60px",
                            marginTop:"5px"
                          }}
                        />
                        
                        <Typography
                          variant="h5"
                          style={{
                           color:"grey"
                          }}
                        >
                          <b> Password Changed Done..</b>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}
