import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {useSelector} from 'react-redux';


import axios from "axios";




export const Booking1 = ()=> {
//const bookings = useSelector(state=>state.booking.booking); 
const bookings = [{id:'1', pickupDate:'09/06/22' ,dropOffDate:'11/06/22', reservationTotal:'2', status:'active'}]

  useEffect(() => {
    
  }, []);

  return (
    <>
    <Grid item xs={1}>

   </Grid>
    <Grid item xs={7} style={{ border:'solid 1px lightgrey', borderRadius:'8px'}}>

    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>Id</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>PickUp Date</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>DropOff Date</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>Reservation Total</TableCell>
            <TableCell align="center" style={{color:'#1565C0', fontWeight:'bolder'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.length&&bookings.map((row) => (
            <TableRow key={row.id}>
              {// <TableCell component="th" scope="row">{row.id}</TableCell>
}
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.pickupDate}</TableCell>
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


