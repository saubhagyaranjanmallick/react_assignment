import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Countdown from "react-countdown";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";

function createData(
  subject,
  questions,
  marks,
  duration,
  negativemark,
  totalmark
) {
  return { subject, questions, marks, negativemark, totalmark, duration };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5c587",
    color: "#141413",
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const rows = [
  createData("General Studies", 50, 2, 30, 0.25, 100),
  createData("Quantative Aptitude", 50, 2, 30, 0.25, 100),
];
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Completionist = () => (
  <span style={{ color: "green", fontFamily: "cursive", fontWeight: "bolder" }}>
    You are ready to start the examination now !
  </span>
);

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const Examdetails = () => {
  const [startButton, setStartbutton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStartbutton(true);
    }, 11000);
  });
  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={12}
        md={6}
        sm={3}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)",
          backgroundRepeat: "no-repeat",
          maxHeight: "180vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        style={{ minHeight: "100vh" }}
      >
        <Grid container justifyContent="center">
          <Grid item lg={10} md={3} sm={2} mt={8}>
            <TableContainer
              component={Paper}
              style={{ padding: 8, boxShadow: "3px" }}
            >
              <card>
                <Typography
                  variant="h4"
                  align="left"
                  style={{
                    fontFamily: "bolder",
                    backgroundColor: "#e9ecf0",
                    borderRadius: "3px",
                    color: "black",
                    padding: 10,
                  }}
                >
                  <b> Odisha Joint Entrance Examination (OJEE)-2022</b>
                </Typography>
              </card>

              <Divider />
              <card
                style={{ minWidth: 650, mt: 1, padding: 2, borderRadius: 1 }}
              >
                <Table sx={{}} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Subject</StyledTableCell>
                      <StyledTableCell align="center">
                        No Of Questions
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        Marks Distribution
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Exam Duration (Min)
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Negative Mark
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Total Mark
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.subject}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.questions}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.marks}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.duration}
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          {row.negativemark}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.totalmark}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                    <Divider />
                  </TableBody>
                </Table>
              </card>

              <Grid
                container
                justifyContent="center"
                spacing={1}
                sx={{ mt: 2, mb: 2 }}
              >
                <Grid item lg={3} md={2} sm={1}>
                  <card>
                    <Typography
                      variant="h6"
                      style={{
                        background: "linear-gradient(180deg,#051817,#11c0f5)",
                        borderRadius: "5px",
                        color: "white",
                        fontFamily: "monospace",
                      }}
                    >
                      Exam Start Time:10 A.M
                    </Typography>
                  </card>
                </Grid>
                <Grid item lg={3} md={2} sm={1}>
                  <card>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "monospace",
                        background: "linear-gradient(180deg,#051817,#11c0f5)",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      Exam End Time:11 A.M
                    </Typography>
                  </card>
                </Grid>
                <Grid item lg={3} md={2} sm={1}>
                  <card>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "monospace",
                        background: "linear-gradient(180deg,#051817,#11c0f5)",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      Exam Duration:1 hour
                    </Typography>
                  </card>
                </Grid>
              </Grid>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={10} md={3} sm={2} mt={6} mb={8}>
            <TableContainer component={Paper}>
              <Typography
                variant="h5"
                align="center"
                style={{
                  fontFamily: "sans",
                  background: "linear-gradient(230deg,#051817,#0e3839)",
                  color: "white",
                }}
              >
                <b>Examination Timer</b>
              </Typography>
              <Divider />
              <Typography
                variant="h5"
                align="center"
                style={{
                  fontFamily: "monospace",
                  color: "red",
                  backgroundColor: "#e9edf0",
                }}
              >
                <Countdown date={Date.now() + 10000}>
                  <Completionist />
                </Countdown>
              </Typography>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item lg={10}>
          <card sx={{ mt: 6, mb: 2, m: 2 }}>
            <TableContainer component={Paper}>
              <Grid item lg={12}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{
                    fontWeight: "bolder",
                    background: "linear-gradient(230deg,#051817,#f08e0e)",
                    color: "white",
                    padding: "2px",
                    borderRadius: "3px",
                    marginTop: "4px",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                >
                  Examination Instructions
                </Typography>
                <Divider />
                <Grid container justifyContent="center">
                  <Grid item lg={10}>
                    <card>
                      <Typography sx={{ mt: 3 }}>
                        ➢ The candidate has to read carefully, the “Information
                        Brochure” and “Instructions to fill the online
                        Application Form for OJEE-2022”.
                      </Typography>
                      <Typography>
                        ➢ First of all, the candidate is to visit OJEE website
                        (www.ojee.nic.in) and then go to the registration page
                        by clicking on “Fresh Candidate Registration”
                      </Typography>
                      <Typography>
                        ➢ The candidate has to read carefully, the “Information
                        Brochure” and “Instructions to fill the online
                        Application Form for OJEE-2022”.
                      </Typography>
                      <Typography>
                        ➢ First of all, the candidate is to visit OJEE website
                        (www.ojee.nic.in) and then go to the registration page
                        by clicking on “Fresh Candidate Registration”
                      </Typography>
                      <Typography>
                        ➢ The candidate has to read carefully, the “Information
                        Brochure” and “Instructions to fill the online
                        Application Form for OJEE-2022”.
                      </Typography>
                      <Typography>
                        ➢ First of all, the candidate is to visit OJEE website
                        (www.ojee.nic.in) and then go to the registration page
                        by clicking on “Fresh Candidate Registration”
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: "background.default",
                          alignItems: "center",
                        }}
                      >
                        {startButton ? (
                          <Button variant="contained" align="center" fullWidth>
                            Start
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            disabled
                            align="center"
                            fullWidth
                          >
                            Start
                          </Button>
                        )}
                      </Stack>
                    </card>
                  </Grid>
                </Grid>
              </Grid>
            </TableContainer>
          </card>
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Examdetails;
