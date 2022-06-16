import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserBokings, putUserBookings } from '../../redux/booking';
// import { Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
// import ReviewsIcon from '@mui/icons-material/Reviews';

export const Booking = () => {
  const { Userbokings } = useSelector((state) => state.booking);
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [reload, setreload] = useState(false);

  const handleCancellBooking = (id) => {
    const data = Userbokings.bookings.map((el) => el.id === id);
    const putData = { ...data[0], status: 'cancelada' };
    dispatch(putUserBookings(id, putData));
    setreload(!reload);
  };

  const handlePdfBooking = (id) => {
    const data = Userbokings.bookings.find((el) => el.id === id);
    console.log(data);
     
   var doc = new jsPDF();
   doc.setDrawColor(0);
   doc.setFillColor(255, 255, 255);
   doc.setDrawColor(0,0,0);
   doc.roundedRect(10, 10, 190, 80, 2, 2, 'FD');
   
   doc.addImage(logo, "PNG", 10, 2, 45, 45);

   doc.setFontSize(16);
   doc.setFont("helvetica", "bold");
   doc.setTextColor(0,0,0);
   doc.text(60, 20, 'COMPROBANTE DE RESERVA CARRY');
   
   doc.setFontSize(11);
   doc.text(60, 30, 'Id: ' );
   doc.text(60, 35, 'Ubicacion: ');
   doc.setFontSize(11);
   doc.setFont("helvetica", "light");
   doc.text(83, 30, data.id);  
   doc.text(83, 35, locations.find(el=>el.id===data.locationId).name);

   
   doc.setFontSize(11);
   doc.setFont("helvetica", "bold");
   doc.text(25, 47, 'Auto');
   doc.text(52, 47, 'Fecha Entrega');
   doc.text(82, 47, 'Fecha Devolucion');
   doc.text(120, 47, 'Costo Total');
   doc.text(150, 47, 'Seguro');
   doc.text(180, 47, 'Estado');
      
  doc.setFontSize(10);
  doc.setTextColor(0,0,0);
  doc.setFont("helvetica", "light");
   doc.text(13, 55, `${data.cartype.make} ${data.cartype.model}` );
   doc.text(55, 55, data.pickUpDate);
   doc.text(85, 55, data.dropOffDate);
   doc.text(120, 55, `${String(data.reservationTotal)} AR`);
   doc.text(155, 55, data.PremiumSecure?'Si':'No');
   doc.text(180, 55, data.status);
   doc.save('Test.pdf');
 
  };
  

  useEffect(() => {
    dispatch(fetchUserBokings(id));
  }, [reload]);
  return (
    <>
      <Grid item xs={0.5}></Grid>

      <Grid item xs={8}>
        <>
          <Typography gutterBottom variant='h4'>
            Mis Reservas
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
                    Agencia
                  </TableCell>
                  <TableCell
                    align='center'
                    style={{ color: '#1565C0', fontWeight: 'bolder' }}
                  >
                    Fecha Retiro
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
                    Costo Total (AR$)
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
                    Seguro
                  </TableCell>
                  <TableCell
                    align='center'
                    style={{ color: '#1565C0', fontWeight: 'bolder' }}
                  >
                    Cancelar
                  </TableCell>
                  <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Pdf
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Userbokings?.bookings?.length
                  ? Userbokings.bookings.map((row) => (
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
                        <TableCell align='center'>
                          {row.location.name}
                        </TableCell>
                        <TableCell align='center'>{row.pickUpDate}</TableCell>
                        <TableCell align='center'>{row.dropOffDate}</TableCell>
                        <TableCell align='center'>
                          {row.reservationTotal}
                        </TableCell>
                        <TableCell align='center'>{row.status}</TableCell>
                        <TableCell align='center'>
                          {row.PremiumSecure ? 'si' : 'no'}
                        </TableCell>
                        <TableCell align='center'>
                          {row.status === 'activo' && (
                            <CancelIcon
                              color='primary'
                              cursor='pointer'
                              onClick={() => handleCancellBooking(row.id)}
                            />
                          )}
                        </TableCell>
                        <TableCell align='center'>
                      {row.status === 'activo' && (
                        <PictureAsPdfIcon
                          color='primary'
                          cursor='pointer'
                          onClick={() => handlePdfBooking(row.id)}
                        />
                      )}
                    </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </Grid>
    </>
  );
};
