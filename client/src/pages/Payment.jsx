import axios from 'axios';
import { useEffect, useState } from 'react';
import Checkout from '../components/Checkout';

const Payment = (reserva) => {
  const [datos, setDatos] = useState('');

  const data = reserva.data.booking;
  useEffect(() => {
    axios
      .post('/payment/payment', {
        total: data.reservationTotal,
        id: data.id,
      })
      .then((res) => {
        setDatos(res.data);
        console.info('Contenido de la data: ', res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>{!datos ? <p>Aguarde un momento...</p> : <Checkout data={datos} />}</>
  );
};

export default Payment;
