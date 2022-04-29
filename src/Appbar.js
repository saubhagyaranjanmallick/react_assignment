import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import "./App.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px ",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Grid container lg={12} md={8} sm={4}>
        <AppBar position="static">
          <Toolbar>
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <AppRegistrationIcon fontSize="medium" />
                <b>TOTAL</b> Assesment
              </Typography>
            </Grid>
            <Grid item lg={8}></Grid>
            <Grid item lg={1} md={4} sm={1}>
              <Button
                sx={{ mb: 1 }}
                variant="contained"
                size="small"
                color="warning"
                onClick={handleOpen}
                startIcon={<HelpCenterRoundedIcon />}
              >
                FAQ
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Grid container lg={12} spacing={2}>
              <Grid item lg={11} sm={2}>
                <Typography variant="h6">
                  <HelpIcon fontSize="small" />
                  <b>Frequently Asked Questions</b>
                </Typography>
              </Grid>
              <Grid item lg={1}>
                <CloseIcon fontsize="large" onClick={handleClose} />
              </Grid>
            </Grid>

            <hr />
            <Typography sx={{ mt: 2, ml: 5 }}>
              <b>
                Below , We answer some most frequently asked questions on our
                platform.
              </b>
            </Typography>

            <Grid item lg={12} md={6} sm={4} mt={5}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>
                    <b>What is Computer Based Examination ?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    It is an online mode of exam. In this mode, students have to
                    appear for the examination through the computer. Students
                    can view only one question at a time on their computer
                    screen. They can view the next questions after clicking the
                    Next Question button.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>
                    {" "}
                    <b>What are CBT (Computer Based Test) types ?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    There are mostly two types i.e. Multiple Choice (single
                    /multiple responses) and Subjective type test. In MCQ type
                    test, students have to appear for the examination through
                    the computer. Students can view only one question at a time
                    on their computer screen. They can view the next questions
                    after clicking the Next Question button.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      What are the advantages of online exam over offline exam ?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Examines can easily track the number of attempted questions
                    and can change their answer or mark any question for review
                    later.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      What are the pre-requisite for TOTAL Assesment platform ?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li>
                        Candidates need to take the assessment either through a
                        Desktop PC or Laptop.
                      </li>
                      <li>
                        Desktop/Laptop: Operating System : Windows 7, 8, 10.
                      </li>
                      <li>
                        Desktop configuration - RAM : Minimum 4GB of RAM
                        Processor : Intel Core i3 or above, HDD : Minimum 20 MB
                        of free space.
                      </li>
                      <li>
                        Mobile phone or tablets in case laptop is not available.
                        The smaller screen size is not recommended.
                      </li>
                      <li>
                        Internet connectivity: Minimum 2 Mbps uninterrupted
                        internet speed is desirable for online test but for
                        offline mode, you need internet pre and post test to
                        fetch and sync to the server respectively.
                      </li>
                      <li>
                        Safe Exam Browser Installation ensures safety and
                        security level of browser at 100%.
                      </li>
                      <li>
                        Supports all types of browsers – Chrome, Firefox, (with
                        appropriate version levels).
                      </li>
                      <li>
                        Webcam-Integrated Webcam or Webcam is mandatory for the
                        assessment.
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>I am not allowed to start the test while logging in?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Check for Internet Connectivity. Please check your exam
                    Schedule for your respective subjects in Email or Admit card
                    to ensure you are Logging in to correct batch time. If
                    problem still persists, please call technical support team
                    at the helpline numbers.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>What is photo attendance?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Photo attendance will be taken just after successful login
                    of examine. Examinee has to allow the Camera and microphone
                    to take the photograph in right angle ,so that one clear
                    image will be captured. Once the candidate click on VERIFY
                    button, It will match with the existing profile photo
                    (Display in left side of the page). After successful match
                    Candidates will able to land on dashboard.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>I am unable to validate my photo</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Make sure the available profile photo is you and the
                    photograph captured should have clearly taken and face is
                    visible. If not then try again at least 3 times to validate.
                    After 3 unsuccessful attempt, your photo validation will go
                    for admin approval and in this case please wait for approval
                    or take help desk service to approve.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      How will we come to know which are the question left
                      unanswered ?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    There will be a panel right side on computer screen showing
                    all the question numbers in different colour which will
                    indicate the questions Answered, left unanswered or marked
                    for review.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>Can the candidate change their answers ?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, during the exam any time candidates can change their
                    answers.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>how to submit the test ?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    “FINAL SUBMIT” button to end the Test is available in the
                    page. By clicking that button candidate can submit the test.
                    The End Test will also auto submit once the time will over.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel11"}
                onChange={handleChange("panel11")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      What should be attire of candidates appearing in the test?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    It should be decent and presentable. Candidates should wear
                    such clothes presuming as if they are physically sitting in
                    Exam center and appearing for the test. Candidates are
                    advised to sit properly and comfortably on table/chair in
                    right posture to appear in test. They should not lie-down on
                    bed or do not sit in awkward positions.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel12"}
                onChange={handleChange("panel12")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      What should be setting in the room from where candidate is
                      appearing for the test?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Setting of room should be maintained in exam like
                    environment, disciplined and without any disturbances.
                    Surroundings of room should be neat & clean. During the
                    exam, live proctor may ask the candidate to show the 360
                    degree view of the room.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel13"}
                onChange={handleChange("panel13")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      Is bio break (use of Toilet ) is allowed during the test?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The candidates will not be allowed to take bio-break ( use
                    of Toilet) during the test. If any candidate takes any break
                    during the test, will be treated as resorting to unfair
                    means.
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}
