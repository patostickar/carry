import { Grid, Box, Link, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        justifyItems: "center",
      }}
      style={{ backgroundColor: "#1976d2" }}
    >
      <Grid item xs={12} sm={6} md={4} style={{ padding: "30px" }}>
        <Typography
          variant="body2"
          style={{ textAlign: "center", fontWeight: "bolder" }}
        >
          ATENCION AL PUBLICO
        </Typography>
        <Typography style={{ fontSize: "13px", textAlign: "center" }}>
          DPTO DE VENTAS
          <br />
          Lunes a Sabado 08:00 a 18:00h
          <br />
          DPTO DE SOPORTE
          <br />
          Lunes a Viernes 08:00 a 18:00h
        </Typography>
      </Grid>
      <Grid
        item
        xs={12} sm={6} md={4}
        style={{
          padding: "30px",

          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          style={{ textAlign: "center", fontWeight: "bolder" }}
        >
          ENLACES UTILES
        </Typography>
        <Link
          href={"/"}
          color="inherit"
          sx={{ textDecoration: "none", fontSize: "13px" }}
        >
          Inicio <br />
        </Link>
        <Link
          href={"/about"}
          color="inherit"
          sx={{ textDecoration: "none", fontSize: "13px" }}
        >
          Nosotros <br />
        </Link>
        <Link
          href={"/terminos-condiciones"}
          color="inherit"
          sx={{ textDecoration: "none", fontSize: "13px" }}
        >
          Terminos y Condiciones <br />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{ padding: "30px" }}>
        <Typography
          variant="body2"
          style={{ textAlign: "center", fontWeight: "bolder" }}
        >
          CONTACTENOS
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <LocationOnOutlinedIcon fontSize="xs" />
          <Link
            href={"/"}
            color="inherit"
            sx={{
              textDecoration: "none",
              fontSize: "13px",
              marginLeft: "5px",
            }}
          >
            Buenos Aires - Argentina
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <PhoneIphoneOutlinedIcon fontSize="xs" />
          <Link
            href={"/"}
            color="inherit"
            sx={{
              textDecoration: "none",
              fontSize: "13px",
              marginLeft: "5px",
            }}
          >
            +54 91112345678
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <EmailOutlinedIcon fontSize="xs" />
          <Link
            href={"/"}
            color="inherit"
            sx={{
              textDecoration: "none",
              fontSize: "13px",
              marginLeft: "5px",
            }}
          >
            carry@info.com
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <EmailOutlinedIcon fontSize="xs" />
          <Link
            href={"/"}
            color="inherit"
            sx={{
              textDecoration: "none",
              fontSize: "13px",
              marginLeft: "5px",
            }}
          >
            carry@info.com
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
            gap: "10px",
          }}
        >
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </Box>
      </Grid>
      <span className={styles.footer__copy}>
        &#169; Carry 2022. Todos los derechos reservados.
      </span>
    </Grid>
  );
}
