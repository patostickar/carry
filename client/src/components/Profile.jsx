import { useAuth0 } from '@auth0/auth0-react';
import { TabTitle } from './GeneralFuntions/GeneralFuntions';
import JSONPretty from 'react-json-pretty';
import styles from './styles/Profile.module.css';
import 'react-json-pretty/themes/monikai.css';

const Profile = () => {
  TabTitle('Perfil - Carry');
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(user);
  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.back}>
          <div className={styles.card} data-state='#about'>
            <div className={styles.cardHeader}>
              <div className={styles.cardCover}></div>
              <img
                src={user.picture}
                alt={user.name}
                className={styles.cardAvatar}
              />
              <h1 className={styles.cardFullname}>{user.name}</h1>
              <h2 className={styles.cardJobTitle}>{user.email}</h2>
            </div>
            <div className={styles.cardMain}>
              <div className={(styles.cardSection, styles.isActive)} id='about'>
                <div className={styles.cardContent}>
                  <div className={styles.cardSubtitle}>Data</div>
                  <p className={styles.cardDesc}>
                    <JSONPretty data={user} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h1>Bienvenido!</h1>
          <p>Registrate para poder acceder a tu perfil</p>
          <button className={styles.ghost} onClick={loginWithRedirect}>
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
