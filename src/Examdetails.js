import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Countdown from "react-countdown";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StartIcon from "@mui/icons-material/Start";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

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
  createData("General Studies", 50, 2, 45, 0.25, 100),
  createData("Quantative Aptitude", 50, 2, 45, 0.25, 100),
  createData("Total Marks", "", "", "", "", 200),
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
  <span
    style={{
      color: "green",
      fontFamily: "cursive",
      fontSize: "25px",
      padding: "5px",
      alignItems: "center",
    }}
  >
    00:00:00:00
  </span>
);

const Examdetails = () => {
  //States
  const [startButton, setStartbutton] = useState(false);
  const [timer, setTimer] = useState(false);
  //Methods

  useEffect(() => {
    setTimeout(() => {
      setStartbutton(true);
    }, 11000);
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 500) setTimer(true);
      else setTimer(false);
    });
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
          maxHeight: "240vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        style={{ minHeight: "100vh" }}
      >
        {timer ? (
          <Grid container justifyContent="right">
            <Button
              variant="contained"
              shape="rounded"
              style={{
                position: "fixed",
                align: "center",
                backgroundColor: "#a2f5d2",
                color: "black",
                fontFamily: "fantasy",
                fontSize: "25px",
                borderRadius: 20,
              }}
            >
              <TimerOutlinedIcon sx={{ color: "blueviolet", mr: 1 }} />{" "}
              <Countdown date={Date.now() + 10000}></Countdown>
            </Button>
          </Grid>
        ) : (
          ""
        )}
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Card sx={{ mt: "40px" }}>
                <Card>
                  <Typography
                    variant="h4"
                    align="left"
                    style={{
                      fontFamily: "bolder",
                      backgroundColor: "#e9ecf0",
                      borderRadius: "3px",
                      color: "black",
                      padding: 10,
                      margin: 5,
                    }}
                  >
                    <b> Odisha Joint Entrance Examination (OJEE)-2022</b>
                  </Typography>
                </Card>
                <Card
                  style={{
                    minWidth: 650,
                    mt: 1,
                    padding: 2,
                    borderRadius: 1,
                  }}
                >
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">
                          Subject
                        </StyledTableCell>
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
                          Full Mark
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
                      {/* <Divider /> */}
                    </TableBody>
                  </Table>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={1}
                    sx={{ mt: 2, mb: 2 }}
                  >
                    <Grid item xs={10} md={3} sm={8}>
                      <Card>
                        <Typography
                          style={{
                            background:
                              "linear-gradient(180deg,#051817,#11c0f5)",
                            borderRadius: "5px",
                            color: "white",
                            fontFamily: "monospace",
                            padding: "5px",
                          }}
                        >
                          Exam Start Time:10A.M
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={10} md={3} sm={8}>
                      <Card>
                        <Typography
                          style={{
                            fontFamily: "monospace",
                            background:
                              "linear-gradient(180deg,#051817,#11c0f5)",
                            borderRadius: "5px",
                            color: "white",
                            padding: "5px",
                          }}
                        >
                          Exam End Time:11 A.M
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={10} md={3} sm={8}>
                      <Card>
                        <Typography
                          style={{
                            fontFamily: "monospace",
                            background:
                              "linear-gradient(180deg,#051817,#11c0f5)",
                            borderRadius: "5px",
                            color: "white",
                            padding: "5px",
                          }}
                        >
                          Exam Duration:1hr:30min
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{ flexGrow: 1, mt: 4, mb: 5 }}
                component={Paper}
                style={{
                  fontWeight: "bolder",
                  color: "green",
                  padding: "2px",
                  borderRadius: "3px",
                }}
                //onMouseMove={afterScroll}
              >
                {startButton ? (
                  <Button variant="contained" fullWidth>
                    start
                    <StartIcon sx={{ ml: 1 }} />
                  </Button>
                ) : (
                  <Typography
                    variant="h4"
                    align="center"
                    padding="5px"
                    fontFamily="monospace"
                    fontWeight="bolder"
                    color="red"
                  >
                    Time Left :-
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "black",
                        fontSize: "45px",
                        backgroundColor: "#e9ecf0",
                        borderRadius: "5px",
                        padding: "4px",
                      }}
                    >
                      <Countdown date={Date.now() + 10000}>
                        <Completionist />
                      </Countdown>
                    </span>
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ mt: 1, mb: 5, m: 2 }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      background: "linear-gradient(230deg,#051817,#f08e0e)",
                      color: "white",
                      padding: "2px",
                      fontSize:"33px",
                      borderRadius: "3px",
                      marginTop: "4px",
                      marginLeft: "4px",
                      marginRight: "4px",
                    }}
                  >
                    Examination Instructions
                  </Typography>
                  <Divider />
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={10}>
                      <Card>
                        <List>
                          <ListItem>
                            <ListItemText>
                              ➢ The candidate has to read carefully, the
                              “Information Brochure” and “Instructions to fill
                              the online Application Form for OJEE-2022”.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ The candidate must take admit card of respective
                              exam along with original identity card in which
                              photo should be clearly visible.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ Do not carry any electronic
                              devices,calculator,smart watch and electronic
                              gadegets into the examination hall, If any one
                              find with this item then they can not appear their
                              examination.
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemText>
                              ➢ Do not carry any electronic
                              devices,calculator,smart watch and electronic
                              gadegets into the examination hall, If any one
                              find with this item then they can not appear their
                              examination.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ Do not carry any electronic
                              devices,calculator,smart watch and electronic
                              gadegets into the examination hall, If any one
                              find with this item then they can not appear their
                              examination.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ Do not carry any electronic
                              devices,calculator,smart watch and electronic
                              gadegets into the examination hall, If any one
                              find with this item then they can not appear their
                              examination.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ Do not carry any electronic
                              devices,calculator,smart watch and electronic
                              gadegets into the examination hall, If any one
                              find with this item then they can not appear their
                              examination.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ Do not carry any electronic
                              devices,calculator,smart watch and electronic
                              gadegets into the examination hall, If any one
                              find with this item then they can not appear their
                              examination.
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>
                              ➢ The candidate must take a transparent water
                              bottle with a N -95 mask and sanitizer , obey all
                              the SOP guidelines for Covid-19.
                            </ListItemText>
                          </ListItem>
                        </List>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
              <br />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Examdetails;
