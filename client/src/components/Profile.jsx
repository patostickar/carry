/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles/Profile.module.css";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import { Navbar } from "./Navbar";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className={styles.back}>
            <div className={styles.card} data-state="#about">
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
                <div
                  className={(styles.cardSection, styles.isActive)}
                  id="about"
                >
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
        </>
      ) : (
        <>
          <Navbar />
          <div className={styles.container}>
            <h1>Bienvenido!</h1>
            <p>Registrate para poder acceder a tu perfil</p>
            <button className={styles.ghost} onClick={loginWithRedirect}>
              Registrarse
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;