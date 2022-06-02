import SearchBar from '../SearchBar/SearchBar';
import { useTypewriter } from 'react-simple-typewriter';
import styles from './styles/SearchBarJumbo.module.css';

export default function SearchBarJumbo() {
  const { text } = useTypewriter({
    words: ['en familia', 'con amigos', 'de negocios', 'a toda la Argentina'],
    loop: 0,
  });

  return (
    <div className={styles.searchBarJumbo}>
      <div className={styles.headerContainer}>
        <h1>
          Alquiler de autos para viajes <span>{text}</span>
        </h1>
        <p className={styles.headerDesc}>
          Conocé la gran flota que tenemos para ofrecerte. Autos de primera gama
          para que tu viaje tenga el confort y seguridad que necesitas.
        </p>

        <div className={styles.searchBarPosition}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
