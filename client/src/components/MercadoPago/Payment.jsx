import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkout from './Checkout';

const Payment = ({ price, id }) => {
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {!datos ? (
        <p>Aguarde un momento...</p>
      ) : (
        <Checkout data={datos} price={price} id={id} />
      )}
    </>
  );
};

export default Payment;
