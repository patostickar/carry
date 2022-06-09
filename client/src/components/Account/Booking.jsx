import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserBokings, putUserBookings } from '../../redux/booking';
// import { Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
// import ReviewsIcon from '@mui/icons-material/Reviews';

export const Booking = () => {
  const { Userbokings } = useSelector((state) => state.booking);
  const { User } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCancellBooking = (id) => {
    const data = Userbokings.bookings.filter((el) => el.id === id);
    const putData = { ...data[0], status: 'inactive' };
    dispatch(putUserBookings(id, putData));
    dispatch(fetchUserBokings(User.id));
  };

  useEffect(() => {
    dispatch(fetchUserBokings(User.id));
  }, []);
  return (
    <>
      <Grid item xs={1}></Grid>

      <Grid
        item
        xs={8}
        style={{ border: 'solid 1px lightgrey', borderRadius: '8px' }}
      >
        <TableContainer component={Paper}>
          <Table aria-label='simple table' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Auto
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  PickUp Date
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  DropOff Date
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Reservation Total
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Status
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Accion
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Userbokings.bookings?.length &&
                Userbokings.bookings.map((row) => (
                  <TableRow key={row.id}>
                    {
                      // <TableCell component="th" scope="row">{row.id}</TableCell>
                    }
                    <TableCell
                      style={{ display: 'flex', 'align-items': 'center' }}
                      align='center'
                    >
                      <img
                        src={row.cartype.img}
                        alt=''
                        style={{ height: 60, width: 110 }}
                      />{' '}
                      {`${row.cartype.make} ${row.cartype.model} `}
                    </TableCell>
                    <TableCell align='center'>{row.pickUpDate}</TableCell>
                    <TableCell align='center'>{row.dropOffDate}</TableCell>
                    <TableCell align='center'>{row.reservationTotal}</TableCell>
                    <TableCell align='center'>{row.status}</TableCell>
                    <TableCell align='center'>
                      {row.status === 'active' && (
                        <CancelIcon
                          color='primary'
                          cursor='pointer'
                          onClick={() => handleCancellBooking(row.id)}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};
