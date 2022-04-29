import React, { Component } from "react";
import Webcam from "react-webcam";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import pic2 from "./Icon/pic2.jfif";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CameraIcon from '@mui/icons-material/Camera';
import ErrorIcon from '@mui/icons-material/Error';
import { useState } from "react";
import { green } from "@mui/material/colors";

export default function Photovalidation() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };
  return (
    <>
      <Grid container>
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
          <Grid container justifyContent="center">
            <Grid container lg={10} md={4} sm={2} mt={8} component={Paper}>
              <Grid container lg={12} sm={2} spacing={2}>
                <Grid item lg={3} sm={1}>
                  <Typography variant="h6">
                    <PhotoCameraIcon color="primary" />
                    <b> Photo Attendance</b>
                  </Typography>
                </Grid>
                <Grid item lg={6} sm={1}>
                <Typography variant="h8" noWrap component="div" sx={{ml:15 ,mt:1}}>
                             
                              <b style={{ color: "green" }}>YOU HAVE  &nbsp;</b>{" "}
                              <b style={{ color: "orange" }}>
                              3 ATTEMPTS &nbsp;
                              </b>{" "}
                              <b style={{ color: "green" }}>LEFT</b>
                            </Typography>
                </Grid>
                <Grid item lg={3} sm={1}>
                  <Typography variant="h6">
                    <b>Hi ,Alok Sahoo</b>
                    <Button variant="outlined" size="small" color="warning">
                      <LogoutIcon fontSize="small" />
                      Logout
                    </Button>
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                lg={12}
                sm={4}
                mt={5}
                spacing={2}
                justifyContent="center"
              >
                <Grid item lg={3} sm={6} xs={12}>
                  <Typography sx={{ ml: 5 }}>
                    <b>Profile Photo</b>
                  </Typography>
                  <Box>
                    <img
                      style={{
                        borderRadius: "10px",
                        marginInlineStart: "20px",
                        marginTop: "5px",
                      }}
                      src={pic2}
                      height="160px"
                      width="150px"
                      alt="profilephoto"
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12} justifyContent="center">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    style={{ height: "300px", width: "500px" }}
                  />
                  <Button
                    variant="contained"
                    fontSize="large"
                    color="warning"
                    onClick={capture}
                    sx={{ mb:2,mt:1,ml:1}}
                   
                  ><CameraIcon/>
                    CAPTURE
                  </Button>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                  <Typography sx={{ ml: 3}}>
                    <b>Captured Photo</b>
                    </Typography>
                    <Box>
                      <img
                        style={{
                          borderRadius: "10px",
                          marginInlineStart: "20px",
                          marginTop: "5px",
                          height: "160px",
                          width: "150px",
                        }}
                        src={imgSrc}
                      />
                      <Button variant="contained"  sx={{ml:5,backgroundColor:'#4caf50' }} > < CheckCircleIcon/>verify</Button>
                    </Box>
                 
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
