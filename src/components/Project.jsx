import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProjectData } from "../service/firebase";

export default function Project(props) {
  const { project } = props;
  const [data, setdata] = useState(undefined);
  const loadData = () => {
    getProjectData(project).then((data) => {
      console.log(data);
      setdata(data);
    });
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, []);
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
          minWidth:'100%'
        }}
      >
{/* `        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          minWidth="100%"
          borderColor="black"
          border={2}
          borderRadius={10}
          style={{
            marginTop: 10,
            marginBottom: 30,
            minWidth:"100%"
          }}
          rowSpacing={3}
        >
          <Grid item xs={12} style={{minWidth:'50%'}}>
            <Grid
              container
              direction="row-reverse"
              justifyContent="flex-start"
              alignItems="center"
              minHeight="100%"
              minWidth="100%"
            >
              <Grid item xs={3}>
                <Typography variant="h6" style={{ color: "white" }}>
                  שם
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" style={{ color: "white" }}>
                  {data.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="subtitle2" style={{ color: "white" }}>
                  {data.description}
                </Typography>

            </Grid>
          </Grid>
        </Grid> */}
        <Paper elevation={1} style={{width:400,height:400}}>
        <Typography variant="h6" style={{ color: "black" }}>
                  {data.name}
                </Typography>
        <Typography variant="subtitle2" style={{ color: "black",marginTop:20 }}>
                  {data.description}
                </Typography>
        



        </Paper>
`      </div>
    );
  }
}
