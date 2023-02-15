import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import lead from '../assets/lead.png';


export default function Signup() {
console.log('here')
  return (
    <div style={{ backgroundColor: '#254D68',minHeight:'100%'
}}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{marginTop:'0px'}}
        rowSpacing={10}

      >
        <Grid item xs={12}>
        <img src={lead} alt="React Logo" />
        </Grid>
        <Grid item xs={12}>

        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </div>
  )
}