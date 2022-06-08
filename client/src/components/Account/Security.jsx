import React from 'react';
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import {TextField,Button, Grid, Typography} from '@mui/material';

const validationSchema = yup.object({
  password: yup
    .string('Enter the product Name')
    .required('Name is required'),
  confirmPassword: yup
    .string('Enter the product Description')
    .required('Description is required'),
    
});

export const Security = () => {
  const formik = useFormik({
    initialValues: {
      password:'',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // dispatch()
        alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
      <Grid container >
            <Grid item xs={4}>
            </Grid>
      <Typography gutterBottom variant='h4' style={{display:'flex', justifyContent:'center', marginBottom:'0px'}}>
                Seguridad
              </Typography> 
              </Grid>
        <Grid container style={{marginTop:'30px'}}>
            <Grid item xs={4}>
            </Grid>
            
            <Grid item xs={8} style={{border:'solid 1px lightgrey', borderRadius:'8px', padding:'20px', marginBottom:'30px'}}>

           
            
            
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{marginBottom:'20px'}}
        />

<TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          style={{marginBottom:'20px'}}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Cambiar Password
        </Button>
        </Grid>
        </Grid>
      </form>
    </div>
  );
};


