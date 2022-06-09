import styles from "./styles/NotFound.module.css";
export default function NotFound() {
  return (
    <div>
      <div className={styles.numero}>404</div>
      <div className={styles.letras}>Page Not Found</div>
    </div>
  );
}
