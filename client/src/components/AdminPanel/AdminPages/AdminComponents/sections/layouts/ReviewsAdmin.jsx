// import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Review from "../../../../../Account/Review"
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Alerts from "../../../../../GeneralFuntions/Alerts";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, TextField, Button, Typography } from '@mui/material';
import 'sweetalert2/dist/sweetalert2.css';


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 115;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));













export default function ReviewsAdmin(){


    const [bookingsReviews, setBookingsReviews] = useState();
  const [reload, setreload] = useState(false);
const id = null
  const getUserBookingReviews = async () => {
    const res = await axios.get(`/bookings/reviews/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setBookingsReviews(res.data);
  };

  useEffect(() => {
    getUserBookingReviews();
  }, [reload]);



  const [testimonials, setTestimonials] = useState();

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`/bookings/reviews/`);
      setTestimonials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  console.log( testimonials
    .filter((b) => {
      const dropOffDate = new Date(b.dropOffDate).getTime();
      const today = new Date().getTime();
      return dropOffDate < today;
    }))




    return(
        <RootStyle>
           

      
        <><DashboardSidebar />

        <MainStyle>
        
        <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <Typography gutterBottom variant='h4'>
         Reviews de usuarios
        </Typography>
        <Typography gutterBottom variant='body1'>
          Comentarios de nuestros usuarios sobre su experiencia carry
        </Typography>

        <TableContainer
          component={Paper}
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            border: 'solid 1px lightgrey',
          }}
        >
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
                  Fecha Recogida
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Fecha Entrega
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {(testimonials.length>0 ? (
              
                testimonials.map((row, i) => (
                    <>
                      <TableRow key={i}>
                        <TableCell
                          style={{ display: 'flex', justifyContent: 'center' }}
                          align='center'
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              padding: '0px',
                            }}
                          >
                            {/* <img
                              src={row.cartype.img}
                              alt=''
                              style={{ height: 60, width: 110 }}
                            /> */}
                            <label>
                              {row.customer.firstName} {row.customer.review}{' '}
                            </label>
                          </div>
                        </TableCell>
                        <TableCell align='center'>{row.pickUpDate}</TableCell>
                        <TableCell align='center'>{row.dropOffDate}</TableCell>
                      </TableRow>
                      <TableRow key={row.id}>
                        <TableCell
                          align='center'
                          style={{
                            color: '#00000099',
                            fontWeight: 'bolder',
                          }}
                        >
                          Reseña
                        </TableCell>
                        <TableCell colSpan='2' style={{ textAlign: 'center' }}>
                          {row.review ? (
                            row.review
                          ) : (
                            <Formik
                              initialValues={{
                                review: '',
                              }}
                              validationSchema={ReviewSchema}
                              onSubmit={(values) => {
                                postreview(values, row.bookingId);
                                Alerts(
                                  'success',
                                  'Gracias por su compartir su opinión'
                                );
                              }}
                            >
                              {({
                                values,
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                errors,
                                touched,
                              }) => (
                                <>
                                  <Form
                                    className='PostReview'
                                    onSubmit={handleSubmit}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      alignContent: 'center',
                                      flexDirection: 'row',
                                      columnGap: '1em',
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      inputProps={{ maxLength: 255 }}
                                      label='Reseña'
                                      name='review'
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.review || ''}
                                      multiline
                                      variant='outlined'
                                    />
                                    <Button
                                      color='primary'
                                      variant='contained'
                                      type='submit'
                                    >
                                      Crear
                                    </Button>
                                  </Form>
                                  {errors.review && touched.review ? (
                                    <div>{errors.review}</div>
                                  ) : null}
                                </>
                              )}
                            </Formik>
                          )}
                        </TableCell>
                      </TableRow>
                    </>
                  ) )):(<p></p>) )}
                
                
                

                  
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
        </MainStyle>
        
        
        </>

        </RootStyle>
    )
}