import React from "react";
import Typography from "@mui/material/Typography";

const Typo = ({ text }) => {
  return (
    <div>
      <Typography
        style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px" }}
      >
        {text}
      </Typography>
    </div>
  );
};

export default Typo;
