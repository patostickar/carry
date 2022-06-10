import styles from "./styles/NotFound.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <><Navbar /><div>
      <div className={styles.numero}>404</div>
      <div className={styles.letras}>Page Not Found</div>
    </div><Footer /></>
  );
}
