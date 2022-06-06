import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { fetchUserBokings } from '../../redux/booking';



export const Bookings = () => {
    const { User } = useSelector((state) => state.user);

    const { Userbokings } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  
    useEffect  (() => { 
        dispatch(fetchUserBokings(User.id))
    }, [])
    console.log(Userbokings);
    


  return (

    <>
    <Grid container my={4}>

   <Grid item xs={2}>

   </Grid>
    <Grid item xs={5} style={{ border:'solid 1px lightgrey', borderRadius:'8px'}}>
     <Box style={{display: "flex",padding: "10px", "flex-direction": "column", "align-items": "stretch"}} >
     {!Userbokings.bookings?.length && <Card>No tiene reservas que mostrar</Card>}
     {Userbokings.bookings?.map((booking) => (<div key={booking.id}>
       <Card>{booking.pickUpDate}</Card>
       <Card>{booking.dropOffDate}</Card>
       <Card>{`${booking.cartype.make} ${booking.cartype.model}`}</Card>
       <img src={booking.cartype.img} alt='' style={{height:60, width:80}} />
       <Card>{booking.reservationTotal}</Card>
     </div>
        ))}
     </Box>
    </Grid>
    </Grid>
    </>
  );
};

