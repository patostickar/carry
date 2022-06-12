
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../components/Account/Sidebar';
import { PersonalInformation } from '../components/Account/PersonalInformation';
import Review from '../components/Account/Review';
import { Booking } from '../components/Account/Booking';
import { UserCard } from '../components/Account/UserCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Account() {
  const [renderControl, setRenderControl] = useState({
    personalInfo: false,
    review: false,
    booking: false,
    userCard:true,
    
  });
  return (
    <>
    <Navbar />
      <Grid container my={4}>
        <Sidebar
          setRenderControl={setRenderControl}
          renderControl={renderControl}
        />
        {renderControl.userCard && (
          <UserCard 
          setRenderControl={setRenderControl}
          renderControl={renderControl}/>
          
        )}
        { renderControl.personalInfo && <PersonalInformation />
        }
        {renderControl.booking && <Booking />}
        {renderControl.review && <Review />}
        
      </Grid>
      <Footer/>
    </>
  );
}