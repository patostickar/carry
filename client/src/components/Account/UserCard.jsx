import { useSelector } from 'react-redux';
import { Box, Button, Grid, Typography, Avatar } from '@mui/material';

export const UserCard = ({ setRenderControl, renderControl }) => {
  const { img, firstName, lastName, email, street, city, phone, postalCode } =
    useSelector((state) => state.user);

  const handleEdit = (event) => {
    setRenderControl({
      personalInfo: true,
      review: false,
      booking: false,
      userCard: false,
    });
  };

  return (
    <>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={6}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',
            margin: '0px',
          }}
        >
          <Avatar
            src={img}
            sx={{
              height: 100,
              mb: 0,
              width: 100,
            }}
          />
        </Box>
        <Box style={{ textAlign: 'center' }}>
          <Typography
            style={{ margin: '0px', padding: '0px', fontSize: '24px' }}
          >
            Informacion Personal
          </Typography>

          {firstName && (
            <Typography align='center' style={{ fontSize: '18px' }}>
              <strong>Nombre: </strong> {firstName} {lastName}
            </Typography>
          )}

          {email && (
            <Typography align='center' style={{ fontSize: '18px' }}>
              <strong>E-mail: </strong> {email}
            </Typography>
          )}

          {street && (
            <Typography align='center' style={{ fontSize: '18px' }}>
              <strong>Dirección: </strong> {street}
            </Typography>
          )}

          {city && (
            <Typography align='center' style={{ fontSize: '18px' }}>
              <strong>Ciudad: </strong> {city}
            </Typography>
          )}

          {phone && (
            <Typography align='center' style={{ fontSize: '18px' }}>
              <strong>Teléfono: </strong> {phone}
            </Typography>
          )}
          {postalCode && (
            <Typography align='center' style={{ fontSize: '18px' }}>
              <strong>Código Postal: </strong> {postalCode}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
          }}
        >
          {' '}
          <Button
            color='primary'
            variant='contained'
            type='submit'
            onClick={handleEdit}
          >
            Editar
          </Button>
        </Box>
      </Grid>
    </>
  );
};
