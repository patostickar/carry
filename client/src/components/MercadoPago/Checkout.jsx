import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingDetails } from '../../redux/booking';
import styles from "./styles/Checkout.module.css";



const Checkout = ({price, data ,id }) => {
  const { booking } = useSelector((state) => state.booking);
  const dispatch = useDispatch()
  useEffect(() => {
    const script = document.createElement("script");
    const attrDataPreference = document.createAttribute("data-preference-id");
    attrDataPreference.value = data.id;

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attrDataPreference);

    document.getElementById(id).appendChild(script);
  }, [data]);

  return <form className={styles.form} onSubmit={()=>{
      if(id==="Seguro"){dispatch(setBookingDetails({...booking,price,PremiumSecure:true}))}
    }} id={id}></form>;


export default Checkout;
