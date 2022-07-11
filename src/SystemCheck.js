import React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./App.css";
import Countdown from "react-countdown";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Button from "@mui/material/Button";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
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
  </Paper>
);

const SystemCheck = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="App">
      <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box sx={{ display: "flex" }}>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 2000 } : {})}
          >
            {icon}
          </Grow>
        </Box>
      </Box>
    </div>
  );
};

export default SystemCheck;
