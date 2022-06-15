import styles from "./styles/NotFound.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import TabTitle from "../components/GeneralFuntions/TabTitle";

export default function NotFound() {
  TabTitle("404 Not Found");

  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className={styles.letras}>PAGE NOT FOUND</div>
        <section className={styles.errorContainer}>
          <span className={styles.four}>
            <span className={styles.screenReaderText}>4</span>
          </span>
          <span className={styles.zero}>
            <span className={styles.screenReaderText}>0</span>
          </span>
          <span className={styles.four}>
            <span className={styles.screenReaderText}>4</span>
          </span>
        </section>
        <div className={styles.linkContainer}>
          <button onClick={onClick} className={styles.siCheckButton}>
            Volver
          </button>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}
