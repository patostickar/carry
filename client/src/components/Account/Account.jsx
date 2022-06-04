import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Sidebar } from './Sidebar';
import { PersonalInformation } from './PersonalInformation';

export const Account = () => {
  const [renderControl, setRenderControl] = useState({
    personalInfo: false,
    security: false,
    payment: false,
    booking: false
});
  return (
    <Grid container my={4}>
    
     <Sidebar setRenderControl={setRenderControl} renderControl={renderControl} />
     { renderControl.personalInfo&&
       <PersonalInformation />
     }
     

     </Grid>
    
    
  )
}
