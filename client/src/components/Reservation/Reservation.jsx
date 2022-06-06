import React from "react";
import { useNavigate } from "react-router-dom";
import Steps from "./Step2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import LuggageIcon from "@mui/icons-material/Luggage";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import styles from "./styles/Reservation.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { DAY_MILISECONDS } from "../GeneralFuntions/constants";

function Reservation(props) {
  const { location, pickupDate, dropoffDate } = useSelector(
    (state) => state.searchBar
  );

  const { booking } = useSelector((state) => state.booking);

  const navigate = useNavigate();

  const dateRange = (dropoffDate - pickupDate) / DAY_MILISECONDS;

  const steps = [
    {
      label: "Retira",
      description: `${location.street}, ${location.city} (${booking.pickUpDate})`,
    },
    {
      label: "Entrega",
      description: `${location.street}, ${location.city} (${booking.dropOffDate}) `,
    },
    {
      label: "Disfrutar",
      description: "",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onClick = () => {
    navigate("/home");
  };

  const handleSearch = () => {
    navigate("/searchResult");
  };

  return (
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
          <Steps />
        </div>

        <div className={styles.title}>
          <h1>Tu Oferta</h1>
        </div>
      </div>

      <div className={styles.contenedor}>
        <div className={styles.derecha}>
          <Box
            sx={{
              maxWidth: 400,
              marginLeft: "-10px",
            }}
          >
            <h2>Recogida y devolucion</h2>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">{""}</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={
                            index === steps.length - 1
                              ? handleSearch
                              : handleNext
                          }
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1
                            ? "Reservar"
                            : "Continuar"}
                        </Button>
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
        <div className={styles.izquierda}>
          <div>
            <div className={styles.Detalles}>
              <h1>Detalles del auto</h1>
            </div>
            <div className={styles.carCard}>
              <div className={styles.imageContainer}>
                <img src={booking.carImg} alt="img" className={styles.siImg} />
              </div>

              <div className={styles.siDesc}>
                <div className={styles.siRating}>
                  <span>Top Pick</span>
                </div>
                <div className={styles.siTitle}>
                  <h3>
                    {booking.carType}
                    <span> o un coche {booking.carClassName} similar</span>{" "}
                  </h3>
                </div>
                <div className={styles.siCarDesc}>
                  <div>
                    <span className="">
                      <PersonIcon /> {booking.carSeats} Asientos
                    </span>
                  </div>
                  <div>
                    <span className="">
                      {" "}
                      <LuggageIcon /> {booking.carLargeSuitcase} Maleta grande
                    </span>
                  </div>
                  <div>
                    <span className="">
                      {" "}
                      <WorkIcon /> {booking.carSmallSuitcase} Maleta pequeña
                    </span>
                  </div>
                  <div>
                    <span className="">
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
                    {" "}
                    Precio por {dateRange} {dateRange === 1 ? "día" : "días"}:{" "}
                  </span>
                  <span className={styles.siprice}>$ {booking.carPrice}</span>
                  <span className={styles.siAmendments}>
                    Cancelación gratuita
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
