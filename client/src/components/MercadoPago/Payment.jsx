import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkout from './Checkout';

const Payment = ({ price }) => {
  const { booking } = useSelector((state) => state.booking);
  const [datos, setDatos] = useState('');

  useEffect(() => {
    axios
      .post('/payment/payment', {
        total: price,
        id: `${booking.carType} + ${price}`,
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
