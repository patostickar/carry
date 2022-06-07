import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {useSelector, useDispatch } from 'react-redux';
import { fetchUserBokings } from '../../redux/booking';






export const Booking = ()=> {
  const { Userbokings } = useSelector((state) => state.booking);
console.log(Userbokings);
  const { User } = useSelector((state) => state.user);

 const dispatch = useDispatch();

  
    useEffect  (() => { 
        dispatch(fetchUserBokings(User.id))
    }, [])
  return (
    <>
    <Grid item xs={1}>

   </Grid>
    <Grid item xs={7} style={{ border:'solid 1px lightgrey', borderRadius:'8px'}}>

    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>Auto</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>PickUp Date</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>DropOff Date</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>Reservation Total</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Userbokings.bookings?.length&& Userbokings.bookings.map((row) => (
            <TableRow key={row.id}>
              {// <TableCell component="th" scope="row">{row.id}</TableCell> 
              }
              <TableCell style={{display: "flex","align-items": "center","flex-direction": "column"}} align="center"><img src={row.cartype.img} alt='' style={{height:60, width:110}}/> {`${row.cartype.make} ${row.cartype.model} `}</TableCell>
              <TableCell align="center">{row.pickUpDate}</TableCell>
              <TableCell align="center">{row.dropOffDate}</TableCell>
              <TableCell align="center">{row.reservationTotal}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </>
  );
}


