import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Button, Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

export const Sidebar = ({ setRenderControl, renderControl }) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={2} style={{ marginBottom: '20px' }}>
        <Grid
          p={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'solid 1px lightgrey',
            borderRadius: '8px',
          }}
        >
          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <PersonIcon color='primary' />
            <Typography
              onClick={() =>{
                (!renderControl.security&&
                !renderControl.payment&&
                !renderControl.booking)&&
                setRenderControl({ ...renderControl, personalInfo: !renderControl.personalInfo })
                }}
              style={{ fontWeight: 'lighter' }}
            >
              Informacion Personal
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <SecurityIcon color='primary' />
            <Typography
              onClick={() =>
                
                setRenderControl({ ...renderControl, security: !renderControl.security })
              }
            >
              Seguridad
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <PaymentIcon color='primary' />
            <Typography
              onClick={() =>
                setRenderControl({ ...renderControl, payment:!renderControl.payment })
              }
            >
              Pagos
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography
              onClick={() =>
                setRenderControl({ ...renderControl, booking: !renderControl.booking })
              }
            >
              Reservas
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography onClick={() => navigate('/')}>
              Eliminar Cuenta
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography onClick={() => navigate('/')}>Salir</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
