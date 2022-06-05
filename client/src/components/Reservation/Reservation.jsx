import React from "react";
import Steps from "./Step2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import LuggageIcon from "@mui/icons-material/Luggage";
import WorkIcon from "@mui/icons-material/Work";
import styles from "./styles/Reservation.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Retira",
    description: `Buenos Aires Centro - dom, 5 jun 2022 10:00`,
  },
  {
    label: "Entrega",
    description: "Buenos Aires Centro - dom, 6 jun 2022 10:00",
  },
  {
    label: "Disfrutar",
    description: `Si los datos son correctos, presiona para reservar, de lo contrario vaya al botón "Modificar"
    `,
  },
];

function Reservation() {
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
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.date}>
          <div className={styles.dateItem1}>
            <span>Buenos Aires Centro</span>
            <h3>dom, 5 jun 2022 10:00</h3>
          </div>

          <div className={styles.step}>
            <ArrowForwardIosIcon />
          </div>

          <div className={styles.dateItem2}>
            <span>Buenos Aires Centro</span>
            <h3>dom, 6 jun 2022 10:00</h3>
          </div>
          <div className={styles.modificar}>
            <button>Modificar</button>
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
                        <Typography variant="caption">Por ultimo</Typography>
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
                          onClick={handleNext}
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
                <img
                  src="https://us.123rf.com/450wm/rawpixel/rawpixel1905/rawpixel190502364/123234788-vista-lateral-de-un-coche-deportivo-amarillo-en-3d.jpg"
                  alt="img"
                  className={styles.siImg}
                />
              </div>

              <div className={styles.siDesc}>
                <div className={styles.siRating}>
                  <span>Top Pick</span>
                </div>
                <div className={styles.siTitle}>
                  <h3>
                    {"VolksWagen "}
                    <span>o un coche similar</span>{" "}
                  </h3>
                </div>
                <div className={styles.siCarDesc}>
                  <div>
                    <span className="">
                      <PersonIcon /> 4
                    </span>
                  </div>
                  <div>
                    <span className="">
                      {" "}
                      <LuggageIcon /> 1 Maleta Grande{" "}
                    </span>
                  </div>
                  <div>
                    <span className="">
                      {" "}
                      <WorkIcon /> 2 Maleta pequeña{" "}
                    </span>
                  </div>
                  <div>
                    <span className="">
                      {" "}
                      <SpeedIcon /> 100 km/l
                    </span>
                  </div>
                </div>

                <div className={styles.siLocation}>
                  <span className={styles.siFeatures}></span>
                </div>
              </div>
              <div className={styles.siDetails}>
                <div className={styles.siDetailTexts}>
                  <span className={styles.siDaysxprice}>Precio por día/s </span>
                  <span className={styles.siprice}>U$150 </span>
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
