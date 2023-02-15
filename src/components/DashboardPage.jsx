import React from 'react'

export default function DashboardPage(props) {
  const {user} = props;
  console.log(user.displayName)
  
    return (
    <div style={{display:"flex",direction:'column',alignItems:'center'}} >
        <h3 style={{color:'white'}}>
            Welcome,{user.displayName} 
        </h3>
    </div>
  )
}
