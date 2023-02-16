import { height } from '@material-ui/system';
import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import lead from "../assets/lead.png"
import { Grid, Typography } from '@mui/material';
import { getUser } from '../service/firebase';
import Project from './Project';
import newProject from './newProject';
import NewProject from './newProject';
import { LocalSeeRounded } from '@mui/icons-material';
export default function DashboardPage(props) {
  const {user} = props;
  const [value, setValue] = React.useState(0);
  const [userData, setuserData] = useState(undefined)
  const [loaded, setloaded] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const loadData = () =>{
    console.log('here')
    getUser(user.uid).then((data)=>{
      console.log('data')
      setuserData(data)
    }
  )
  }
  useEffect(() => {
    console.log('here')
    loadData()
    console.log(userData)
    return () => {
    }
  }, [loaded])
  
  
  return (
    <div style={{marginTop:10,display:"flex",direction:'column',alignItems:'flex-start',justifyContent:'center'}} >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginTop: 10,
          border: 1,
          borderRadius: 20,
          marginBottom:30
        }}
        rowSpacing={3}
      >
    <img src={lead} alt="React Logo" />
  <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
  <Tab icon={<FavoriteIcon />} aria-label="favorite" label="המיזם שלי" />
  <Tab icon={<SearchIcon />} aria-label="search" label="חפש מיזם" />
</Tabs>
{userData &&
value==0 && 
userData.projects.length>0 &&
  <Grid item xs={12}>
    <Project project={userData.projects[0]}/>
  </Grid>
}
{userData &&
value==0 && 
userData.projects.length==0 &&
  <Grid item xs={12}>
    <Typography variant="h3" style={{ color: "white" }}>
            {" "}
            !אין לך מיזמים{" "}
      </Typography>
  </Grid>
}
{userData &&
value==0 && 
userData.projects.length==0 &&
  <Grid item xs={12} style={{minWidth:'50%'}}>
    <NewProject userData={userData} loaded={loaded} setloaded={setloaded}></NewProject>
  </Grid>
}

 
</Grid>
    </div>
  )
}
