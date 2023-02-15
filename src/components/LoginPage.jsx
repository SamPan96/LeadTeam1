import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../service/firebase";
import lead from '../assets/lead.png';
export default function LoginPage() {
  return (
    <div style={{ backgroundColor: '#254D68',minHeight:'100%'
}}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{marginTop:'100px'}}
        rowSpacing={10}
      >
        <Grid item xs={12}>
        <img src={lead} alt="React Logo" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{color:"white"}}> !ברוך הבא למערכת ליד </Typography>
        </Grid>
        <Grid item xs={12}>
          <GoogleButton onClick={signInWithGoogle} style={{borderRadius:30}}></GoogleButton>
        </Grid>
      </Grid>
    </div>
  );
}
