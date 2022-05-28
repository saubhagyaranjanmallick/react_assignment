import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./App.css";

export default function Dashboard() {
  return (
    <Grid
      container
      lg={12}
      spacing={2}
      justifyContent="center"
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1562585195-97aff4b3848c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
        backgroundRepeat: "no-repeat",
        maxHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      style={{ minHeight: "100vh" }}
    >
      <Grid item lg={8}>
        <Box
          sx={{
            minWidth: "100%",
            minHeight: "60%",
            backgroundColor: "whitesmoke",
            marginTop: "90px",
            borderRadius: "12px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            <h2 className="body1"><b> Welcome To TOTAL Assesment Dashboard</b></h2>{" "}
          </Typography>
          <hr />
          <div>
            
            {/* <marquee style={{ color: "red", fontSize: "1.5em" }}>
              This is the official page of TOTAL Assesment exam portal and the
              latest notifications about examination are listed below .......
            </marquee> */}
          </div>

          <Box>
            <Typography
              sx={{
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "2px",
              }}
            >
              {" "}
              <ArrowCircleRightIcon
                sx={{ minHeight: "1px", minWidth: "1px" }}
                color="primary"
              />
              PUBLIC NOTICE 02.05.2022 Conduct of the Admission Test for Diploma
              in Sport Coaching of the National Institute of Sports Read More
              Public Notice 01 May 2022 Display of Provisional Answer Keys and
              Question Paper with Recorded Responses for Answer Key Challenge
              for Graduate Aptitude Test- Biotechnology (GAT-B)/ Biotechnology
              Eligibility Test (BET) – 2022.💥
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "2px",
              }}
            >
              <ArrowCircleRightIcon color="primary" />
              PUBLIC NOTICE 02.05.2022 Conduct of the Admission Test for Diploma
              in Sport Coaching of the National Institute of Sports.💥
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
