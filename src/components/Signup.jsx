import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import lead from "../assets/lead.png";
import { auth, createUser } from "../service/firebase";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Signup(props) {
  const {setnewUser} = props
  const [mentor, setmentor] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const [formValues, setformValues] = useState({
    name: user.displayName,
    email: user.email,
    picture: user.photoURL,
    mentor: mentor,
    age: undefined,
    description: undefined,
    id:user.uid,
    projects:[],
  });

  const handleChange = () => {
    if(mentor){
        setformValues({...formValues,'mentor':false})
        setmentor(false)
    }
    else{
        setformValues({...formValues,'mentor':true})
        setmentor(true)
    }
  };
  console.log(formValues)
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setformValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleClick = () =>{
    createUser(formValues);
    setnewUser(false)

  }

  user.providerData.forEach(profile=>{console.log(profile.photoURL)})
  return (
    <div
      style={{
        backgroundColor: "#254D68",
        minHeight: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
        
      }}
    >
      <img src={lead} alt="React Logo" style={{ marginTop: 100 }} />
      {mentor && (
        <Grid item xs={12}>
          <Typography variant="h3" style={{ color: "white" }}>
            הרשמה חונך
          </Typography>
        </Grid>
      )}
      {!mentor && (
        <Grid item xs={12}>
          <Typography variant="h3" style={{ color: "white" }}>
            הרשמה שגריר
          </Typography>
        </Grid>
      )}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="lightGrey"
        style={{
          marginTop: 10,
          maxWidth: "50%",
          border: 1,
          borderRadius: 20,
          marginBottom:30
        }}
        rowSpacing={3}
      >
        <Grid item xs={12}>
          <img
            src={user.photoURL}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              overflow: "auto",
              borderWidth: 3,
              borderColor: "red",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <ToggleButtonGroup
            color="primary"
            value={mentor ? "חונך" : "שגריר"}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="web" style={{ borderColor: "black" }}>
              שגריר
            </ToggleButton>
            <ToggleButton value="android">חונך</ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <TextField
            disabled
            id="outlined-disabled"
            label="שם"
            defaultValue={user.displayName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled
            id="outlined-disabled"
            label="email"
            defaultValue={user.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required={true}
            name="age"
            label="גיל"
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            defaultValue={user.email}
            onChange={handleChangeForm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="...קצת עליי"
            multiline
            maxRows={50}
            variant="filled"
            onChange={handleChangeForm}
          />
        </Grid>

        <Grid item xs={12} style={{marginBottom:10}}>
            <Button variant="contained"style={{borderColor:'black',borderWidth:20,borderRadius:10}} onClick={handleClick}>
                הירשם
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}
