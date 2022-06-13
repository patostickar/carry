import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { ClearBookingState } from "../redux/booking";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./styles/MPrespose.module.css";
import { useNavigate } from "react-router";
import Img from "../assets/check.png";
import TabTitle from "../components/GeneralFuntions/TabTitle";

const NotAllowed = () => {
  TabTitle("Acceso restringido");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { pickupDate, dropoffDate } = useSelector((state) => state.searchBar);
  const { booking } = useSelector((state) => state.booking);

  const Pdate = new Date(pickupDate);
  const Ddate = new Date(dropoffDate);
  const PickDate =
    Pdate.getFullYear() + "/" + (Pdate.getMonth() + 1) + "/" + Pdate.getDate();
  const DropDate =
    Ddate.getFullYear() + "/" + (Ddate.getMonth() + 1) + "/" + Ddate.getDate();

  async function CreateBooking(data) {
    try {
      await axios.post("/bookings", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async () => {
    await CreateBooking({
      carTypeId: booking.carTypeId,
      customerId: user.id,
      locationId: booking.locationId,
      pickUpDate: PickDate,
      dropOffDate: DropDate,
      PremiumSecure: booking.PremiumSecure,
    });
  };

  useEffect(() => {
    if (user) {
      (async () => {
        await handleSearch();
      })();
    }
  }, []);

  const onClick = () => {
    dispatch(ClearBookingState());
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.wrapper1}>
          <div className={styles.wrapper2}>
            <img src={Img} alt="success" />
            <h1>Lo sentimos!</h1>
            <p>Acceso restringido.</p>
            <p>Necesita permisos para poder acceder.</p>
            {/* <Link to="/profile"> */}
            <button className={styles.goHome} onClick={onClick}>
              Volver
            </button>
            {/* </Link> */}
          </div>
          <div className={styles.footerLike}>
            <p>
              Tienes preguntas?
              <a href="#"> Contactanos</a>
            </p>
          </div>
        </div>
      </div>

      {/* <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link> */}
      {/* <div>gracias por su compra </div>
        <button onClick={onClick}>Mis reservas</button>
       */}
      <Footer />
    </>
  );
};
export default NotAllowed;
