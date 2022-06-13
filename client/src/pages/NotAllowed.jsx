import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./styles/MPrespose.module.css";
import { useNavigate } from "react-router";
import Img from "../assets/check.png";
import TabTitle from "../components/GeneralFuntions/TabTitle";

const NotAllowed = () => {
  TabTitle("Acceso restringido");

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
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
            <button className={styles.goHome} onClick={onClick}>
              Volver
            </button>
          </div>
          <div className={styles.footerLike}>
            <p>
              Tienes preguntas?
              <a href="#"> Contactanos</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default NotAllowed;
