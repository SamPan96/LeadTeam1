import {
  Button,
  Checkbox,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { checkUncheck, createGoal, getProjectData } from "../service/firebase";
import twork from "../assets/teamwork.jpg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Project(props) {
  const { project } = props;
  const [data, setdata] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [dataLoaded, setdataLoaded] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [formValues, setformValues] = useState({
    name: undefined,
    description: undefined,
    completed:false,
  });
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setformValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleChecked = (idx) => {
    console.log('here')
    console.log(idx)
    checkUncheck(project,idx)
    setdataLoaded(!dataLoaded)
    setdataLoaded(!dataLoaded)
  }
  const handleClick = () => {
    createGoal(formValues, project);
    setOpen(false);
    setdataLoaded(!dataLoaded);
  };

  const loadData = () => {
    getProjectData(project).then((data) => {
      console.log(data);
      setdata(data);
    });
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, [dataLoaded]);
  if (data) {
    return (
      <div
        style={{
          backgroundColor: "#254D68",
          minHeight: "100%",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: "100%",
        }}
      >
        {/* <Paper
          elevation={1}
          style={{ backgroundColor: "#254D68", width: 400, height: 450, border: "1px solid rgba(255,255,255)" }}
        >
            <img src={twork} alt="" height={150} width={400}/>
          <Typography variant="h4" style={{ color: "white" }}>
            {data.name}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: "white", marginTop: 20 }}
          >
            {data.description}
          </Typography>
          <Typography variant="h5" style={{ color: "white", marginTop: 20 }}>
            יעדים
          </Typography>
          {data.goals.length == 0 && (
            <Typography
              variant="subtitle2"
              style={{ color: "white", marginTop: 20 }}
            >
              !עדיין לא הוגדרו יעדים
            </Typography>
          )}
          {data.goals.map(function (d, idx) {
            return (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{
                  border: "1px solid rgba(255,255,255)",
                  marginTop: 10,
                  borderRadius: 20,
                  marginBottom: 30,
                  minWidth: "100%",
                  padding: 4,
                }}
              >
                <Grid item xs={12}>
                    <Grid container 
                    direction="row"
                    justifyContent="space-evenly"
                    >
                        <Grid item xs={9}>
                        <Typography style={{ color: "white" }} variant="h6">{d.name}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                        <Checkbox {...label} checked={d.completed} onClick={()=>handleChecked(idx)} />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{ color: "white" }}variant="subtitle1">{d.description} </Typography>
                </Grid>
              </Grid>
            );
          })}
          <Button onClick={handleOpen}>צור יעד חדש</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{
                backgroundColor:'lightBlue',
                marginTop: 10,
                border: 1,
                borderRadius: 20,
                marginBottom: 30,
                minWidth: "100%",
                padding: 4,
              }}
              rowSpacing={3}
            >
              <Grid item xs={12}>
                <Typography variant="h3" style={{ color: "white" }}>
                  יצירת יעד חדש
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-disabled"
                  label="שם"
                  name="name"
                  onChange={handleChangeForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="תיאור"
                  multiline
                  maxRows={50}
                  variant="filled"
                  onChange={handleChangeForm}
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: 10 }}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid rgba(255,255,255)",
                    borderRadius: 10,
                  }}
                  onClick={handleClick}
                >
                  צור
                </Button>
              </Grid>
            </Grid>
          </Modal>
        </Paper> */}

        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 200,width:400 }}
        image={twork}
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {data.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {data.description}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          יעדים
        </Typography>
        {data.goals.length == 0 && (
            <Typography
              variant="subtitle2"
              style={{ color: "white", marginTop: 20 }}
            >
              !עדיין לא הוגדרו יעדים
            </Typography>
          )}
                  {data.goals.map(function (d, idx) {
            return (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{
                  border: "1px solid rgba(255,255,255)",
                  marginTop: 10,
                  borderRadius: 20,
                  marginBottom: 30,
                  minWidth: "100%",
                  padding: 4,
                }}
              >
                <Grid item xs={12}>
                    <Grid container 
                    direction="row"
                    justifyContent="space-evenly"
                    >
                        <Grid item xs={9}>
                        <Typography gutterBottom style={{ color: "black" }} variant="h6">{d.name}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                        <Checkbox {...label} checked={d.completed} onClick={()=>handleChecked(idx)} />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom style={{ color: "black" }}variant="subtitle1">{d.description} </Typography>
                </Grid>
              </Grid>
            );
          })}

        
<Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{
                backgroundColor:'lightBlue',
                marginTop: 10,
                border: 1,
                borderRadius: 20,
                marginBottom: 30,
                minWidth: "100%",
                padding: 4,
              }}
              rowSpacing={3}
            >
              <Grid item xs={12}>
                <Typography variant="h3" style={{ color: "white" }}>
                  יצירת יעד חדש
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-disabled"
                  label="שם"
                  name="name"
                  onChange={handleChangeForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="תיאור"
                  multiline
                  maxRows={50}
                  variant="filled"
                  onChange={handleChangeForm}
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: 10 }}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid rgba(255,255,255)",
                    borderRadius: 10,
                  }}
                  onClick={handleClick}
                >
                  צור
                </Button>
              </Grid>
            </Grid>
          </Modal>



      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>יצירת יעד חדש</Button>
      </CardActions>
    </Card>

      </div>
    );
  }
}
