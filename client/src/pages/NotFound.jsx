import styles from "./styles/NotFound.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
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
          <a href="/" className={styles.siCheckButton} rel="noreferrer">
            Volver
          </a>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}
