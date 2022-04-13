import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
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

        
       <AppBar position="static">
        <Toolbar>
          <AppRegistrationIcon/>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,}}>
           <b>TOTAL</b>  
          </Typography>
          <Typography variant='h8'   sx={{mr:122 }}>
           <b>Assesment</b>
          </Typography>
          
          <Button variant='contained' size='medium' color="warning" 
          onClick={handleOpen}
          startIcon={<HelpCenterRoundedIcon />}>FAQ</Button>
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
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <HelpIcon/>
            <b>Frequently Asked Questions</b>

            <Button onClick={handleClose} sx={{ ml: 38 }}  > 
           
              <CloseIcon  fontsize="large" color="dark" />
              close
            </Button>
          </Typography>
          <hr />
          <Typography sx={{ mt: 2,ml:5 }}>
            <b>
              Below , We answer some most frequently asked questions on our
              platform.
            </b>
          </Typography>

          <Grid item lg= {8} sm={4} mt={5} ml={5}>
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
                The use of computers as a medium to deliver the tests as opposed to
                 pen and paper is called a computer-based test. These tests can be 
                 delivered online via the internet
                 or using specific computer systems in a facility.
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
                CBT is based on the concept that your thoughts, feelings,
                 physical sensations and actions are interconnected, 
                and that negative thoughts and feelings can trap you in a vicious cycle.
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
                //sx={{backgroundColor:"#044684ed",color:"white"}}
              >
                <Typography>
                  <b>
                    What are the advantages of online exam over offline exam ?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Computer-based tests have become an essential facility provided by the government, 
                corporate and private sectors for conducting assessments or recruiting candidates. 
                It not only saves time and resources but also helps 
                in tracking students' progress through the data that is generated.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
