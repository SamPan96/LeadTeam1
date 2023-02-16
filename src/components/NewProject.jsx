import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import lead from "../assets/lead.png";
import { auth, createProject, createUser } from "../service/firebase";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { margin } from "@material-ui/system";

export default function NewProject(props) {
  const {userData,loaded,setloaded} = props
  const [formValues, setformValues] = useState({
    name: undefined,
    description: undefined,
    owner:userData.id,
    goals:[],
  });
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setformValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleClick = () =>{
    createProject(formValues,userData)
    setloaded(!loaded)
  }


  return (
    
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        marginTop: 10,
        backgroundColor: "lightgray",
        border: 1,
        borderRadius: 20,
        marginBottom:30,
        minWidth:'100%',
        padding:4,
        
      }}
      rowSpacing={3}
    >
    

      <Grid item xs={12}>
      <Typography variant="h3" style={{ color: "white" }}>
            יצירת מיזם חדש
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

      <Grid item xs={12} style={{marginBottom:10}}>
          <Button variant="contained"style={{borderColor:'black',borderWidth:20,borderRadius:10}} onClick={handleClick}  >
              צור
          </Button>
      </Grid>
    </Grid>

  )
}
