import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { putUser } from '../../redux/user';

export const PersonalInformation = ({ setRenderControl, renderControl }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [values, setValues] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    city: user?.city,
    street: user?.street,
    postalCode: user?.postalCode,
    avatar: user?.img,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    // setRenderControl({ ...renderControl, personalInfo: !renderControl.personalInfo })
    dispatch(putUser(user.id, values));
  };

  return (
    <>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={5}
        style={{ border: 'solid 1px lightgrey', borderRadius: '8px' }}
      >
        <Box
          style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        >
          <Avatar
            src={values.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
        </Box>
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
          <Card>
            <CardHeader
              subheader='Actualiza tus datos'
              title={
                <Typography gutterBottom variant='h4'>
                  Informacion Personal
                </Typography>
              }
            />

            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    helperText='Please specify the first name'
                    label='First name'
                    name='firstName'
                    onChange={handleChange}
                    required
                    value={values.firstName || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Last name'
                    name='lastName'
                    onChange={handleChange}
                    required
                    value={values.lastName || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Email Address'
                    name='email'
                    onChange={handleChange}
                    required
                    value={values.email || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Phone Number'
                    name='phone'
                    onChange={handleChange}
                    type='number'
                    value={values.phone || ''}
                    variant='outlined'
                    required
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='City'
                    name='city'
                    onChange={handleChange}
                    required
                    value={values.city || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Street'
                    name='street'
                    onChange={handleChange}
                    required
                    value={values.street || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Postal Code'
                    name='postalCode'
                    onChange={handleChange}
                    required
                    value={values.postalCode || ''}
                    variant='outlined'
                  />
                </Grid>
              </Grid>
            </CardContent>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button color='primary' variant='contained' type='submit'>
                Save details
              </Button>
            </Box>
          </Card>
        </form>
      </Grid>
    </>
  );
};
