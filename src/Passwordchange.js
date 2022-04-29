import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./App.css";

import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Appbar from "./Appbar";
import Erroricon from "./Icon/Erroricon.gif";

export default function App() {
  const [password, setPassword] = useState(" ");
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState(" ");
  const [validate, setValidate] = useState(true);
  const [proceed, setProceed] = useState(false);
  const [failure, setFailure] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const requestPassword = {
      // password: "password",
      // newpassword: "newpassword",
      // confirmnewpassword:"confirmnewpassword",

      password: "password",
      new_password: "newpassword",
      user_code: "userCode",
      org_code: "orgCode",
    };
    // console.log(requestPassword);

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
                    lg={8}
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
                    <Grid lg={8} sm={2}>
                      <card sx={{ maxHeight: "100%", maxWidth: "80%" }}>
                        <Box m={3}>
                          <TextField
                            label="Password"
                            variant="outlined"
                            type="text"
                            name="password"
                            margin="normal"
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                          />
                          <TextField
                            autoComplete="newpassword"
                            label=" New Password"
                            variant="outlined"
                            type="password"
                            name="newpassword"
                            margin="normal"
                            onChange={(e) => setNewpassword(e.target.value)}
                            fullWidth
                          />

                          <TextField
                            label=" Confirm New Password"
                            variant="outlined"
                            type="password"
                            name="confirmnewpassword"
                            margin="normal"
                            onChange={(e) =>
                              setConfirmnewpassword(e.target.value)
                            }
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
              </Grid>
            </Grid>
            {proceed ? (
              <div>
                <h1>Succesfully Password Changed</h1>
              </div>
            ) : (
              ""
            )}
          </Grid>
        </Box>
      </form>
    </>
  );
}
