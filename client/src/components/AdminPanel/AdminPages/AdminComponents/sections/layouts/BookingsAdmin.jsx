import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { putUserBookings } from '../../../../../../redux/booking';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.css';
import styles from '../../../../CreateForms/styles/Formulario.module.css';
import DashboardSidebar from './DashboardSidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function BookingsAdmin() {
  const handleCancellBooking = (id) => {
    const data = bookings.filter((el) => el.id === id);
    const putData = { ...data[0], status: 'inactivo' };
    dispatch(putUserBookings(id, putData));
  };

  const [customers, setCustomers] = useState([]);
  const [bookings, setBookings] = useState([]);

  const getUsers = async () => {
    const customers = await axios.get('/customers', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setCustomers(customers.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getBookings = async () => {
    const bookings = await axios.get('/bookings', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setBookings(bookings.data);
  };

  useEffect(() => {
    getBookings();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <DashboardSidebar />
          <Formik
            initialValues={{
              id: '',
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleSubmit, handleChange, handleBlur }) => (
              <Form className='carTypeCreate' onSubmit={handleSubmit}>
                <div>
                  <label className={styles.input_box} htmlFor='id'>
                    Seleccione el usuario
                  </label>

                  <Field className={styles.field} component='div' id='id'>
                    <select className={styles.field} name='id' id='id'>
                      {customers?.map((d) => (
                        <option
                          value={d.id}
                          id={values.id}
                          key={d.id}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {`${d.firstName} ${d.lastName}`}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <button type='Submit'>Crear</button>
              </Form>
            )}
          </Formik>

          <>
            <Grid item xs={0.5}></Grid>

            <Grid item xs={8}>
              <>
                <Typography gutterBottom variant='h4'>
                  Reservas del cliente
                </Typography>
                <TableContainer
                  component={Paper}
                  style={{ border: 'solid 1px lightgrey', borderRadius: '8px' }}
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
                        <TableCell
                          align='center'
                          style={{ color: '#1565C0', fontWeight: 'bolder' }}
                        >
                          Costo Total (USD)
                        </TableCell>
                        <TableCell
                          align='center'
                          style={{ color: '#1565C0', fontWeight: 'bolder' }}
                        >
                          Estado
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
                      {bookings.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell
                            style={{ display: 'flex', alignItems: 'center' }}
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
                          <TableCell align='center'>
                            {row.reservationTotal}
                          </TableCell>
                          <TableCell align='center'>{row.status}</TableCell>
                          <TableCell align='center'>
                            {row.status === 'activo' && (
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
              </>
            </Grid>
          </>
        </div>
      </div>
    </>
  );
}
