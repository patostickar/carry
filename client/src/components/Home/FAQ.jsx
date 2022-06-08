import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles/FAQ.module.css';

export default function FAQ() {
  const faq = [
    {
      question: '¿Qué necesito para retirar un coche?',
      answer:
        'En el mostrador de alquiler, necesitará presentar: Pasaporte o DNI, Licencia de conducir vigente y la tarjeta de crédito del titular de la reserva.',
    },
    {
      question: '¿Tengo la edad suficiente para alquilar un coche?',
      answer:
        'La edad mínima para alquilar un auto es de al menos 21 años. Pero si tiene menos de 25 se aplicará un cargo extra "tarifa de conductor joven" del 15%.',
    },
    {
      question: '¿Cuál es la duración mínima de alquiler de un auto?',
      answer: 'La duración mínima del servicio es 24 horas.',
    },
    {
      question: '¿Cómo puedo abonar mi reserva?',
      answer:
        'Podés abonar en efectivo, tarjeta de crédito o débito (American Express, Diners, Mastercard y Visa, Visa Electron y Maestro).',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.accordions}>
        <h2 className='section__title'>Preguntas Frecuentes</h2>
        {faq.map((q, i) => (
          <AccordionItem question={q.question} answer={q.answer} key={i} />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ question, answer }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <div className={styles.section__subtitle}>
          <Typography fontSize={'0.938rem'}>{question}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.section__description}>
          <Typography fontSize={'0.813rem'}>{answer}</Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
