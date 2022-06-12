
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
import { fetchUser, putUser } from '../../redux/user';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup
    .string('Ingrese un nombre valido')
    .min(3,'Minimo 3 caracteres de longitud')
    .max(15,'Maximo 15 caracteres de longitud')
    .required('El campo Nombre es requerido'),
    lastName: yup
    .string('Ingrese un Apellido valido')
    .min(3,'Minimo 3 caracteres de longitud')
    .max(15,'Maximo 15 caracteres de longitud')
    .required('El campo Apellido es requerido'),
    email: yup
    .string()
    .email('Ingrese un Email valido')
    .required('El campo Email es requerido'),
    phone: yup
    .string()
    .min(3,'Minimo 3 caracteres de longitud')
    .required('El campo Telefono es requerido'),
    city: yup
    .string()
    .min(3,'Minimo 3 caracteres de longitud')
    .required('El campo City es requerido'),
    street: yup
    .string()
    .min(3,'Minimo 3 caracteres de longitud')
    .required('El campo Direccion es requerido'),
    postalCode: yup
    .string()
    .min(3,'Minimo 3 caracteres de longitud')
    .required('El campo Codigo Postal es requerido'),
});

export const PersonalInformation = ({ setRenderControl, renderControl }) => {
  const dispatch = useDispatch();
  const { User } = useSelector((state) => state.user);
  
  

  
  

  const formik = useFormik({
    initialValues: {
    firstName: User.firstName,
    lastName: User.lastName,
    email: User.email,
    phone: User.phone,
    city: User.city,
    street: User.street,
    postalCode: User.postalCode,
    
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log('Hola en el Submit');
      dispatch(putUser(User.id, values));
      
    },
  });
  


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
            src={User.img}
            sx={{
              height: 120,
              mb: 2,
              width: 120,
            }}
          />
        </Box>
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
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
                    label='First name'
                    name='firstName'
                    required
                    variant='outlined'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
          
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Last name'
                    name='lastName'
                    required
                    variant='outlined'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Email Address'
                    name='email'
                    required
                    variant='outlined'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Phone Number'
                    name='phone'
                    required
                    variant='outlined'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='City'
                    name='city'
                    required
                    variant='outlined'
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Street'
                    name='street'
                    required
                    variant='outlined'
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    error={formik.touched.street && Boolean(formik.errors.street)}
                    helperText={formik.touched.street && formik.errors.street}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label='Postal Code'
                    name='postalCode'
                    required
                    variant='outlined'
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                    helperText={formik.touched.postalCode && formik.errors.postalCode}
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
                Guardar Cambios
              </Button>
            </Box>
          </Card>
        </form>
      </Grid>
    </>
  );
};

