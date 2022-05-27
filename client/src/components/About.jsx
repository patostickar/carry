import React from 'react';
import Byron from '../assets/Byron.png';
import Juan from '../assets/Juan.png';
import Cesar from '../assets/Cesar.jpg';
import Franco from '../assets/Franco.png';
import Luis from '../assets/Luis.jpg';
import Sam from '../assets/Sam.png';
import Patricio from '../assets/Patricio.jpg';
import styles from './styles/About.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TabTitle } from '../components/GeneralFuntions/GeneralFuntions';

function About() {
  TabTitle('Nosotros - Carry');

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Byron} />
          </div>
          <div className={styles.caption}>
            <h3>Byron Correa</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/ByronCorrea'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Patricio} />
          </div>
          <div className={styles.caption}>
            <h3>Patricio Stickar</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/patostickar'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Cesar} />
          </div>
          <div className={styles.caption}>
            <h3>Cesar Galeano</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/cesargaleano'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Franco} />
          </div>
          <div className={styles.caption}>
            <h3>Franco Garcia</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/Dakkai'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Luis} />
          </div>
          <div className={styles.caption}>
            <h3>Luis Leonel</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/luleheco22'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Juan} />
          </div>
          <div className={styles.caption}>
            <h3>Juan Parra</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/JuanParraIV'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profile_card}>
          <div className={styles.img}>
            <img src={Sam} />
          </div>
          <div className={styles.caption}>
            <h3>Samuel Centeno</h3>
            <p>Frontend Developer</p>
            <div className={styles.social_links}>
              <a
                href='https://www.linkedin.com/in/byroncorrea/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/harshtiger'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
