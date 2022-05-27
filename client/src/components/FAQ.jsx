import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles/FAQ.module.css';

export default function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.accordions}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>¿Qué necesito para alquilar un coche?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              En el mostrador de alquiler, necesitará: Tu pasaporte tu cupón
              Licencia de conducir de cada conductor La tarjeta de crédito del
              conductor principal (algunas empresas de alquiler también aceptan
              tarjetas de débito, pero la mayoría no). Importante: asegúrese de
              consultar también los términos de alquiler del automóvil, ya que
              cada compañía de alquiler tiene sus propias reglas. ¿Por ejemplo?
              Es posible que necesiten ver alguna identificación adicional. Es
              posible que no acepten ciertos tipos de tarjetas de crédito. O es
              posible que no alquilen a ningún conductor que no haya tenido su
              licencia de conducir durante 36 meses o más.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography>
              ¿Tengo la edad suficiente para alquilar un coche?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              La mayoría de las empresas le alquilarán un automóvil si tiene al
              menos 21 años (y algunas lo alquilarán a conductores más jóvenes).
              Pero si tiene menos de 25 años, es posible que deba pagar una
              "tarifa de conductor joven".
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography>
              ¿Algún consejo para elegir el coche adecuado?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Piensa a dónde vas. Un SUV puede ser excelente para circular por
              una autopista de Texas, pero un automóvil más pequeño
              probablemente sea mucho más fácil de manejar en Roma. Mira lo que
              piensan otras personas. Encontrará muchas reseñas y calificaciones
              en nuestro sitio, así que descubra qué les gustó (y no les gustó)
              a otros clientes sobre cada empresa de alquiler. No olvides la
              caja de cambios. En algunos países, casi todo el mundo conduce un
              automóvil manual. En otros, las automáticas son la norma.
              ¡Asegúrate de alquilar uno que puedas conducir!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
