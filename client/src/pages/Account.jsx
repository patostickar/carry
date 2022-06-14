import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Sidebar } from "../components/Account/Sidebar";
import { PersonalInformation } from "../components/Account/PersonalInformation";
import Review from "../components/Account/Review";
import { Booking } from "../components/Account/Booking";
import { UserCard } from "../components/Account/UserCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TabTitle from "../components/GeneralFuntions/TabTitle";
import styles from "./styles/Account.module.css";

export default function Account() {
  TabTitle("Perfil");

  const [renderControl, setRenderControl] = useState({
    personalInfo: false,
    review: false,
    booking: false,
    userCard: true,
  });
  return (
    <div>
      <div className={styles.all}>
        <Navbar />
        <Grid container my={4}>
          <Sidebar
            setRenderControl={setRenderControl}
            renderControl={renderControl}
          />
          {renderControl.userCard && (
            <UserCard
              setRenderControl={setRenderControl}
              renderControl={renderControl}
            />
          )}
          {renderControl.personalInfo && <PersonalInformation />}
          {renderControl.booking && <Booking />}
          {renderControl.review && <Review />}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
