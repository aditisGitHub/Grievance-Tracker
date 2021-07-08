import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  // title: {
  //   fontSize: 28,
  // },
  pos: {
    marginBottom: 12,
  },
  mainFlex: {
    backgroundColor: "white",
    display: "flex",
    // justifyContent: "space-between"
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        // spacing={5}
        style={{ marginTop: "30px" }}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
              <CardContent>
                <div
                  className={classes.mainFlex}
                  style={{ marginBottom: "15px" }}
                >
                  <MonetizationOnIcon style={{ marginTop: "3px" }} />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    variant="h5"
                    component="h2"
                  >
                    Sales
                  </Typography>
                </div>
                <div className={classes.mainFlex}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ marginRight: "50px" }}
                  >
                    $38,002
                  </Typography>
                  {/* <IconButton> */}
                  <div className={classes.mainFlex}>
                    <TrendingUpIcon style={{ marginTop: "4px" }} />
                    {/* </IconButton> */}
                    <Typography variant="h6" component="h2">
                      14%
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
              <CardContent>
                <div
                  className={classes.mainFlex}
                  style={{ marginBottom: "15px" }}
                >
                  <MonetizationOnIcon style={{ marginTop: "3px" }} />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    variant="h5"
                    component="h2"
                  >
                    Sales
                  </Typography>
                </div>
                <div className={classes.mainFlex}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ marginRight: "50px" }}
                  >
                    $38,002
                  </Typography>
                  {/* <IconButton> */}
                  <div className={classes.mainFlex}>
                    <TrendingUpIcon style={{ marginTop: "4px" }} />
                    {/* </IconButton> */}
                    <Typography variant="h6" component="h2">
                      14%
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
              <CardContent>
                <div
                  className={classes.mainFlex}
                  style={{ marginBottom: "15px" }}
                >
                  <MonetizationOnIcon style={{ marginTop: "3px" }} />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    variant="h5"
                    component="h2"
                  >
                    Sales
                  </Typography>
                </div>
                <div className={classes.mainFlex}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ marginRight: "50px" }}
                  >
                    $38,002
                  </Typography>
                  {/* <IconButton> */}
                  <div className={classes.mainFlex}>
                    <TrendingUpIcon style={{ marginTop: "4px" }} />
                    {/* </IconButton> */}
                    <Typography variant="h6" component="h2">
                      14%
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
              <CardContent>
                <div
                  className={classes.mainFlex}
                  style={{ marginBottom: "15px" }}
                >
                  <MonetizationOnIcon style={{ marginTop: "3px" }} />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    variant="h5"
                    component="h2"
                  >
                    Sales
                  </Typography>
                </div>
                <div className={classes.mainFlex}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ marginRight: "50px" }}
                  >
                    $38,002
                  </Typography>
                  {/* <IconButton> */}
                  <div className={classes.mainFlex}>
                    <TrendingUpIcon style={{ marginTop: "4px" }} />
                    {/* </IconButton> */}
                    <Typography variant="h6" component="h2">
                      14%
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
