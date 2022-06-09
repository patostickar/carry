import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../components/Account/Sidebar';
import { PersonalInformation } from '../components/Account/PersonalInformation';
import Review from '../components/Account/Review';
import { Booking } from '../components/Account/Booking';
import { Security } from '../components/Account/Security';

export default function Account() {
  const [renderControl, setRenderControl] = useState({
    personalInfo: false,
    security: false,
    payment: false,
    review: false,
  });
  return (
    <>
      <Grid container my={4}>
        <Sidebar
          setRenderControl={setRenderControl}
          renderControl={renderControl}
        />
        {renderControl.personalInfo && (
          <PersonalInformation
            setRenderControl={setRenderControl}
            renderControl={renderControl}
          />
        )}
        {renderControl.booking && <Booking />}
        {renderControl.security && <Security />}
        {renderControl.review && <Review />}
      </Grid>
    </>
  );
}
