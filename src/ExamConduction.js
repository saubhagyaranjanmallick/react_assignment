import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";


const ExamConduction = () => {
  return (
    <div>
      {" "}
      <Grid container>
        <CssBaseline />
        <AppBar position="relative" >
          <Toolbar>
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                {/* <AppRegistrationIcon sx={{ fontSize: "28px" }} /> */}
                <span style={{ fontSize: "30px", fontWeight: "bolder" }}>
                  TOTAL
                </span>{" "}
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  Assesment
                </span>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};

export default ExamConduction;
