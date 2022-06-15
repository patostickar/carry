import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Alerts from '../GeneralFuntions/Alerts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, TextField, Button, Typography } from '@mui/material';
import 'sweetalert2/dist/sweetalert2.css';

export default function Review() {
  const { id } = useSelector((state) => state.user);

  const [bookingsReviews, setBookingsReviews] = useState();
  const [reload, setreload] = useState(false);

  const getUserBookingReviews = async () => {
    const res = await axios.get(`/bookings/reviews/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setBookingsReviews(res.data);
  };

  async function postreview(values, id) {
    try {
      await axios.post(`/bookings/reviews/${id}`, values, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setreload(!reload);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserBookingReviews();
  }, [reload]);

  const ReviewSchema = Yup.object().shape({
    review: Yup.string()
      .min(10, 'Por favor escriba al menos 10 caracteres!')
      .max(255, 'Máximo 255 caracteres!'),
  });

  return (
    <>
      <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <Typography gutterBottom variant='h4'>
          Mis Reseñas
        </Typography>
        <Typography gutterBottom variant='body1'>
          Cómo evaluarías tu experiencia con Carry ?
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
              {bookingsReviews?.length
                ? bookingsReviews
                    .filter((b) => {
                      const dropOffDate = new Date(b.dropOffDate).getTime();
                      const today = new Date().getTime();
                      return dropOffDate < today;
                    })
                    .map((row, i) => (
                      <>
                        <TableRow key={i}>
                          <TableCell
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
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
                              <img
                                src={row.cartype.img}
                                alt=''
                                style={{ height: 60, width: 110 }}
                              />
                              <label>
                                {row.cartype.make} {row.cartype.model}{' '}
                              </label>
                            </div>
                          </TableCell>
                          <TableCell align='center'>{row.pickUpDate}</TableCell>
                          <TableCell align='center'>
                            {row.dropOffDate}
                          </TableCell>
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
                          <TableCell
                            colSpan='2'
                            style={{ textAlign: 'center' }}
                          >
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
                    ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
