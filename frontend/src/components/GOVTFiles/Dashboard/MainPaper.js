import React from "react";
import { GraphLine, GraphBar } from "./Graphs";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { BarChart, Bar } from "recharts";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

export default function MainPaper() {
  return (
    <Grid container style={{ marginTop: "50px" }} spacing={3}>
      <Grid item xs={12} sm={8}>
        <Card
          variant="outlined"
          elevation={3}
          style={{ marginTop: "50p", width: "100%" }}
        >
          {/* <CardHeader
            style={{ backgroundColor: "white" }}
            title={"hello"}
            subheader={"sales"}
          /> */}

          <div
            style={{
              fontSize: "40px",
              marginTop: "20px",
              marginLeft: "20px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Quaterly Sales</span>
            <span style={{ fontSize: "25px" }}>January 2021 - March 2021</span>
          </div>
          {/* <Typography color="textSecondary" variant="h2" component="h2">
            Sales
          </Typography> */}
          {/* <Typography
            variant="h4"
            // component="h2"
            style={{ marginRight: "50px" }}
          >
            Quaterly Sales
          </Typography> */}
          <CardContent>
            {/* Card */}
            <GraphLine />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card
          variant="outlined"
          elevation={3}
          style={{ marginTop: "50p", width: "100%" }}
        >
          <div
            style={{
              fontSize: "40px",
              marginTop: "20px",
              marginLeft: "20px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Quaterly Sales</span>
            <span style={{ fontSize: "25px" }}>January 2021 - March 2021</span>
          </div>
          <CardContent>
            {/* Card */}
            <GraphBar />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
