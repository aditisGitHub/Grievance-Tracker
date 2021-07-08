import React from "react";
import Xcards from "./Xcards";
import MainPaper from "./MainPaper";
import TableData from "./TableData";
import "../../dashboard.css";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <div style={{ backgroundColor: "#F3F4F8" }}>
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        style={{ marginTop: "33px" }}
      >
        Admin Dashboard
      </Typography>

      <Xcards />
      <MainPaper />
      <TableData />
    </div>
  );
}

export default Home;
