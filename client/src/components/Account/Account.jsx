import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Sidebar } from './Sidebar';
import { PersonalInformation } from './PersonalInformation';
import  Review from './Review';
import { NavLink } from 'react-router-dom';
import { Bookings } from './Bookings';
import {Booking1} from './Booking1';

export default function Account() {
  const [renderControl, setRenderControl] = useState({
    personalInfo: false,
    security: false,
    payment: false,
    booking: false,
  });
  return (<>
      <NavLink to='/AdminPanel'><Button variant='contained'>opciones de admin</Button>  </NavLink>
    <Grid container my={4}>
      <Sidebar
        setRenderControl={setRenderControl}
        renderControl={renderControl}
        />
      {renderControl.personalInfo && <PersonalInformation
       setRenderControl={setRenderControl}
        renderControl={renderControl}/>}
      {renderControl.booking &&<Booking1/>
}
    </Grid>
    <Review/>
        </>
  );
}
