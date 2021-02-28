import React from "react";
import "./search.css";
import Checkbox from "@material-ui/core/Checkbox";

import {
  Grid,
  Paper,
  Typography,
  Button,} from "@material-ui/core";

import IconButton from '@material-ui/core/IconButton';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <center>
        <div className="search-bar">
          <form className="ui-form">
            <div className="field">
              <input type="text" className="ui-input" placeholder="Search" />

              <label style={{ color: "green" }}>Search</label>
            </div>
          </form>
        </div>
        <div>
          <Checkbox
            className="box1"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <label className="check1" style={{ color: "black" }}>
            มูลนิธิ
          </label>

          <Checkbox
            className="box2"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <label className="check2" style={{ color: "black" }}>
            ตู้ปันใจ
          </label>
        </div>{" "}
      </center>

      
      <div className="search-bar">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className="framepost">
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" className="dew"></Typography>
              </Grid>
              <Grid item sm={4}>
                {/* จุด3จุด */}
                <span>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                  ></IconButton>
                </span>
              </Grid>
            </Grid>

            <div className="frontpost">ข้อมูล</div>
            <Grid container justify="center">
              <div className=" frampicture">
                <img src="https://th.bing.com/th/id/OIP.ocZAvEG4Aci0n_wAJcnCYgHaEE?w=289&h=180&c=7&o=5&pid=1.7" className="picture" />
              </div>
            </Grid>

            <Grid container justify="center">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  แก้ไข
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                 
                >
                  ถูกใจ
                </Button>

              </div>
            </Grid>
          </Paper>
        </Grid>





        <Grid item xs={12} sm={4}>
          <Paper className="framepost">
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" className="dew"></Typography>
              </Grid>
              <Grid item sm={4}>
                {/* จุด3จุด */}
                <span>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                  ></IconButton>
                </span>
              </Grid>
            </Grid>

            <div className="frontpost">ข้อมูล</div>
            <Grid container justify="center">
              <div className=" frampicture">
                <img src="https://th.bing.com/th/id/OIP.ocZAvEG4Aci0n_wAJcnCYgHaEE?w=289&h=180&c=7&o=5&pid=1.7" className="picture" />
              </div>
            </Grid>

            <Grid container justify="center">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  แก้ไข
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                 
                >
                  ถูกใจ
                </Button>

              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className="framepost">
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" className="dew"></Typography>
              </Grid>
              <Grid item sm={4}>
                {/* จุด3จุด */}
                <span>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                  ></IconButton>
                </span>
              </Grid>
            </Grid>

            <div className="frontpost">ข้อมูล</div>
            <Grid container justify="center">
              <div className=" frampicture">
                <img src="https://th.bing.com/th/id/OIP.ocZAvEG4Aci0n_wAJcnCYgHaEE?w=289&h=180&c=7&o=5&pid=1.7" className="picture" />
              </div>
            </Grid>

            <Grid container justify="center">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  บริจาค
                </Button>

               

              </div>
            </Grid>
          </Paper>
        </Grid>



      </Grid>
      </div>
    </div>
  );
}
