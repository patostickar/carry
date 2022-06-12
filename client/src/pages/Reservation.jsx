import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import SpeedIcon from '@mui/icons-material/Speed';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import styles from './styles/Reservation.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { DAY_MILISECONDS } from '../components/GeneralFuntions/constants';
import LinearIndeterminate from '../components/GeneralFuntions/LinearIndeterminate';
import CheckIcon from '@mui/icons-material/Check';
// import axios from "axios";
import Payment from '../components/MercadoPago/Payment';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Steps2() {
  const steps = ['Elegir un auto', 'Confirmar reserva', 'Disfrutar'];
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step style={{ zIndex: '-1' }} key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

function Reservation() {
  const { location, pickupDate, dropoffDate } = useSelector(
    (state) => state.searchBar
  );
  const { isBanned } = useSelector((state) => state.user);

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // const [bookin, setbookin] = React.useState(0);

  const { booking } = useSelector((state) => state.booking);
  // const Pdate = new Date(pickupDate);
  // const Ddate = new Date(dropoffDate);
  // // const PickDate =
  // Pdate.getFullYear() + "/" + (Pdate.getMonth() + 1) + "/" + Pdate.getDate();
  // const DropDate =
  // Ddate.getFullYear() + "/" + (Ddate.getMonth() + 1) + "/" + Ddate.getDate();

  const navigate = useNavigate();
  const dateRange = (dropoffDate - pickupDate) / DAY_MILISECONDS;

  // async function CreateBooking(data) {
  //   try {
  //     return await axios.post("/bookings", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const steps = [
    {
      label: 'Lugar de recogida',
      description: `${location.street}, ${location.city} `,
    },
    {
      label: 'Lugar de devolución',
      description: `${location.street}, ${location.city}`,
    },
    // {
    //   label: "Disfrutar",
    //   description: "",
    // },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1 && !isAuthenticated) {
      loginWithRedirect();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onClick = () => {
    navigate('/searchResult');
  };

  // const handleSearch = async () => {
  //   // setbookin(book);
  // };

  return (
    <div>
      <Navbar />

      <div className={styles.all}>
        <div className={styles.container}>
          <div className={styles.date}>
            <div className={styles.dateItem1}>
              <span>{location.name}</span>
              <h3>{booking.pickUpDate}</h3>
            </div>

            <div className={styles.step}>
              <ArrowForwardIosIcon />
            </div>

            <div className={styles.dateItem2}>
              <span>{location.name}</span>
              <h3>{booking.dropOffDate}</h3>
            </div>
            <div className={styles.modificar}>
              <button onClick={onClick}>Modificar</button>
            </div>
          </div>
          <div>
            <Steps2 />
          </div>

          <div className={styles.title}>
            <h1>Tu Oferta</h1>
          </div>
        </div>
        {!booking.locationId ? (
          <div className={styles.loader}>
            <LinearIndeterminate />
          </div>
        ) : (
          <div className={styles.contenedor}>
            <div className={styles.derecha}>
              <Box
                sx={{
                  maxWidth: 400,
                  marginLeft: '-10px',
                }}
              >
                <h2>Recogida y devolucion</h2>
                <Stepper activeStep={activeStep} orientation='vertical'>
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === 2 ? (
                            <Typography variant='caption'>{''}</Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            {index !== steps.length - 1 ? (
                              <Button
                                variant='contained'
                                onClick={
                                  index !== steps.length - 1 && handleNext
                                }
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index !== steps.length - 1 && 'Continuar'}
                              </Button>
                            ) : (
                              <div></div>
                            )}

                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Volver
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Redireccionar a pagar</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Volver
                    </Button>
                  </Paper>
                )}
              </Box>
            </div>
            <div className={styles.conTenedor}>
              <div>
                <h2>
                  Este vehiculo cuesta tan solo ${booking.carPrice} ¡Una
                  verdadera ganga!
                </h2>
              </div>
              <div>
                <h3>
                  En esta epoca del año, un coche {booking.carClass} en{' '}
                  {location.city} suele costar ${' '}
                  {(booking.carPrice / 100) * 150}
                </h3>
              </div>
            </div>
            <div className={styles.izquierda}>
              <div>
                <div className={styles.Detalles}>
                  <h1>Detalles del auto</h1>
                </div>
                <div className={styles.carCard}>
                  <div className={styles.imageContainer}>
                    <img
                      src={booking.carImg}
                      alt='img'
                      className={styles.siImg}
                    />
                  </div>

                  <div className={styles.siDesc}>
                    <div className={styles.siRating}>
                      <span>Top Pick</span>
                    </div>
                    <div className={styles.siTitle}>
                      <h3>
                        {booking.carType}
                        <span> o un coche {booking.carClass} similar</span>{' '}
                      </h3>
                    </div>
                    <div className={styles.siCarDesc}>
                      <div>
                        <span className=''>
                          <PersonIcon /> {booking.carSeats} Asientos
                        </span>
                      </div>
                      <div>
                        <span className=''>
                          {' '}
                          <LuggageIcon /> {booking.carLargeSuitcase} Maleta
                          grande
                        </span>
                      </div>
                      <div>
                        <span className=''>
                          {' '}
                          <WorkIcon /> {booking.carSmallSuitcase} Maleta pequeña
                        </span>
                      </div>
                      <div>
                        <span className=''>
                          <SpeedIcon /> {booking.carMpg} km/l
                        </span>
                      </div>
                    </div>

                    <div className={styles.siLocation}>
                      <span className={styles.siFeatures}>
                        <BuildIcon /> {booking.carTransmission}
                      </span>
                    </div>
                  </div>
                  <div className={styles.siDetails}>
                    <div className={styles.siDetailTexts}>
                      <span className={styles.siDaysxprice}>
                        {' '}
                        Precio por {dateRange}{' '}
                        {dateRange === 1 ? 'día' : 'días'}:{' '}
                      </span>
                      <span className={styles.siprice}>
                        $ {booking.carPrice}
                      </span>
                      <span className={styles.siAmendments}>
                        Cancelación gratuita
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.ultimo}>
          <div className={styles.primero}>
            <div className={styles.tercer}>
              <div className={styles.title}>
                <h2>Un seguro... para mayor tranquilidad</h2>
              </div>
              <div className={styles.subTitle}>
                <h2>
                  <CheckIcon /> Cancelación GRATIS
                </h2>
              </div>
            </div>
            <div className={styles.conditions}>
              <p>
                Durante la recogida, la empresa de alquiler de coches bloqueará
                el importe del pago inicial en tu tarjeta de crédito. Puedes
                perder el pago inicial completo si el coche se dañara o te lo
                robaran. Sin embargo, si tienes Cobertura Premium,
                ¡Rentalcover.com te lo reembolsará! (El precio que ves incluye
                todos los impuestos y cargos correspondientes). Sujeto a los
                Términos y condiciones y a las exclusiones estándar. Lee con
                atención:{' '}
                <a
                  href='https://www.rentalcover.com/pds/18I0-62XT-INS'
                  target='_blank'
                  rel='noreferrer'
                >
                  Condiciones de la póliza
                </a>
              </p>
            </div>
            <div className={styles.incluye}>
              <div className={styles.incluye1}>
                <div className={styles.que}>
                  <h2>¿Qué incluye?</h2>
                </div>
                <div className={styles.hola}>
                  <h2>Sin cobertura</h2>
                </div>

                <div className={styles.cobertura}>
                  <h2>Precio</h2>
                  <h4>$ {(booking.carPrice / 100) * 30}</h4>
                </div>
              </div>
              <div className={styles.incluye1}>
                <div className={styles.que}>
                  <div>La franquicia del coche</div>
                </div>
                <div className={styles.hola}>
                  <h3>❌</h3>
                </div>
                <div className={styles.cobertura}>
                  <h3>✅</h3>
                </div>
              </div>

              <div className={styles.incluye1}>
                <div className={styles.que}>
                  <div>Ruedas y neumáticos</div>
                </div>
                <div className={styles.hola}>
                  <h3>❌</h3>
                </div>
                <div className={styles.cobertura}>
                  <h3>✅</h3>
                </div>
              </div>

              <div className={styles.incluye1}>
                <div className={styles.que}>
                  <div>Gastos administrativos</div>
                </div>
                <div className={styles.hola}>
                  <h3>❌</h3>
                </div>
                <div className={styles.cobertura}>
                  <h3>✅</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.segundo}>
            <div className={styles.title2}>
              <h2>DETALLE</h2>
            </div>

            <div className={styles.tabla}>
              <div className={styles.tabla1}>
                <h5>🚘 Auto</h5>
              </div>
              <div className={styles.tabla2}>
                <h3>${booking.carPrice}</h3>
              </div>
            </div>
            <div className={styles.tabla}>
              <div className={styles.tabla1}>
                <h5>✅ Seguro</h5>
              </div>
              <div className={styles.tabla2}>
                <h3>${(booking.carPrice / 100) * 30}</h3>
              </div>
            </div>
            <div className={styles.tabla}>
              <div className={styles.tabla1}>
                <h5>
                  📆 {dateRange} {dateRange === 1 ? 'día' : 'días'}:{' '}
                </h5>
              </div>
              <div className={styles.tabla2}>
                <h3>${(booking.carPrice / 100) * 130}</h3>
              </div>
            </div>
            <div className={styles.divButtons}>
              <div className={styles.buttons1}>
                {isAuthenticated && !isBanned ? (
                  <div>
                    {' '}
                    <h3>Con seguro</h3>
                    <Payment
                      id={'Seguro'}
                      price={(booking.carPrice / 100) * 130}
                    />
                  </div>
                ) : !isBanned ? (
                  <button className={styles.button} onClick={loginWithRedirect}>
                    Reservar con seguro
                  </button>
                ) : (
                  // <div>inicie sesion par continuar</div>
                  <button className={styles.button} onClick={loginWithRedirect}>
                    Su cuenta fue eliminada
                  </button>
                )}
              </div>
              <div className={styles.buttons2}>
                {isAuthenticated && !isBanned ? (
                  <div>
                    <h3>Sin seguro</h3>
                    <Payment id={'!seguro'} price={booking.carPrice} />
                  </div>
                ) : !isBanned ? (
                  <button
                    className={styles.buttons}
                    onClick={loginWithRedirect}
                  >
                    Reservar sin seguro
                  </button>
                ) : (
                  // <div>inicie sesion par continuar</div>
                  <button className={styles.button} onClick={loginWithRedirect}>
                    Su cuenta fue eliminada
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Reservation;
