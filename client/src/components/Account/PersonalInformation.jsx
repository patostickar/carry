import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Grid,
  TextField,
   Typography,
   Avatar
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

export const PersonalInformation = () => {
  const [values, setValues] = useState({
    firstName: 'Cesar',
    lastName: 'Galeano',
    email: 'tocega@yahoo.es',
    phone: '3013111225',
    city: 'Bucaramanga',
    postal_code: '754543'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = ()=>{
    

  };

  return (
    <>
   <Grid item xs={2}>

   </Grid>
    <Grid item xs={5} style={{ border:'solid 1px lightgrey', borderRadius:'8px'}}>
     <Box style={{display:'flex', justifyContent:'center', padding:'10px'}} >
        <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
               }}
          />
          </Box>
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      
    >
      <Card>
        <CardHeader
          subheader="Actualiza tus datos"
          title={
            <Typography gutterBottom variant="h4">
              Informacion Personal
            </Typography>
         }          
        />
       
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Street"
                name="street"
                onChange={handleChange}
                required
                value={values.street}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Postal Code"
                name="postalcode"
                onChange={handleChange}
                required
                value={values.postal_code}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
    </Grid>
    </>
  );
};

