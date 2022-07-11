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
import { toast, ToastContainer } from "react-toastify";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Erroricon from "./Icon/Erroricon.gif";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CryptoJs from "crypto-js";
import Appbar from "./Appbar";


const Passwordchange = () => {
  var schema = new passwordValidator();
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

  // const passwordSave = (e) => {
  //   setPassword(e.target.value);
  // };

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
    const password = document.getElementById("old_password").value;
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
            toast.success("Password Changed Sucessfully...");
            setTimeout(() => {
              setValidate(false);
              setProceed(true);
            }, 3000);
          } else if (data.dbStatus === "ERROR") {
            toast.error("Password Changed Failed !");
            setValidate(false);
            setFailure(true);
          }
        } else {
          toast.error("Error!Contact Support");
        }
      }
    });
  };

  const getrequestData = JSON.parse(localStorage.getItem("requestData"));

  const secret = "N}vLE7k~Egvs.*j)";
  let bytes = CryptoJs.AES.decrypt(getrequestData, secret);
  let data = bytes.toString(CryptoJs.enc.Utf8);
  const userData = JSON.parse(data);
  const getresultData = JSON.parse(localStorage.getItem("resultData"));

  return (
    <>
      <form>
        <Appbar/>
        <Box>
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              md={12}
              sm={10}
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)",
                backgroundRepeat: "no-repeat",
                maxHeight: "200vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              style={{ minHeight: "100vh" }}
            >
              {validate ? (
                <Grid container spacing={2} justifyContent="center">
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    md={8}
                    mt={10}
                    sx={{ backgroundColor: "whitesmoke" }}
                  >
                    
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, mb: 2, mt: 2 }}
                    >
                      <EditIcon color="primary" />
                      <b>Change Default Password</b>
                      <Typography
                        variant="h11"
                        sx={{ flexGrow: 1, mb: 2,ml:40 }}
                      >
                        <b>
                          Welcome, {getresultData.data.first_name}
                          {getresultData.data.last_name}
                        </b>
                        <Button variant="outlined" size="small" color="warning" float="right">
                          <LogoutIcon /> LOGOUT
                        </Button>
                      </Typography>
                    </Typography>
                    <Grid container>
                      <Grid item xs ={12} md={8} sm={6}>
                        <Card sx={{ maxHeight: "100%", maxWidth: "80%" }}>
                          <Box m={3}>
                            <div className="inputBox">
                              <TextField
                                label="Password"
                                variant="outlined"
                                type="text"
                                name="password"
                                margin="normal"
                                id="old_password"
                                // onChange={(e) => passwordSave(e)}
                                value={userData.password}
                                fullWidth
                              ></TextField>
                              <TextField
                                autoComplete="newpassword"
                                label=" New Password"
                                variant="outlined"
                                name="newpassword"
                                margin="normal"
                                onChange={(e) => check(e)}
                                fullWidth
                                // type={this.state.showPassword ? "text" : "password"}
                              ></TextField>
                              {/* <Button
                                value="right"
                                aria-label="right aligned"
                                onClick={()=>this.setState({showPassword:!this.state.showPassword})}
                              >
                               {this.state.showPassword ? <ShowIcon/>:<ShowOffIcon/>} 
                              </Button> */}
                              <TextField
                                label=" Confirm New Password"
                                variant="outlined"
                                type="password"
                                name="confirmnewpassword"
                                margin="normal"
                                onChange={(e) => check1(e)}
                                fullWidth
                              />
                            </div>
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
                              {" "}
                              <ToastContainer
                                position="top-right"
                                theme="colored"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                              />
                              change
                            </Button>
                          </Box>
                        </Card>
                      </Grid>
                      <Grid item lg={2} sm={1}>
                        <Box
                          sx={{
                            width: 250,
                            height: 260,
                            borderRadius: 3,
                            marginTop: "35px",
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
                            <ReportIcon
                              fontSize="medium"
                              color="primary"
                              size="large"
                            />
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
                      <img src={Erroricon} alt="" />
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
                          marginLeft: "60px",
                          marginTop: "5px",
                        }}
                      />

                      <Typography
                        variant="h5"
                        style={{
                          color: "grey",
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
        </Box>
      </form>
      {/* {localStorage.removeItem("requestData")} */}
    </>
  );
};
// }
// };
export default Passwordchange;
