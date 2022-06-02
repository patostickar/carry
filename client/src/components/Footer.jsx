import { Grid, Box, Container, Link } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1565C0",
        marginTop: "40px",
        color: "white",
        justifyItems: "center",
      }}
    >
      <Container maxwidth="lg">
        <Grid
          container
          spacing={5}
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={3}
            style={{ padding: "30px", borderRight: "solid 0.5px" }}
          >
            <Box sx={{ textAlign: "center", fontSize: "16px" }}>
              HORARIO DE ATENCION
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <p style={{ fontSize: "12px" }}>DPTO DE VENTAS</p>
              <p style={{ fontSize: "11px", marginTop: "0px" }}>
                Lunes a Sabado 08:00 a 18:00h
              </p>
              <p style={{ fontSize: "12px" }}>DPTO DE SOPORTE</p>
              <p style={{ fontSize: "11px", marginTop: "0px" }}>
                Lunes a Viernes 08:00 a 18:00h
              </p>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            style={{ padding: "30px", borderRight: "solid 0.5px" }}
          >
            <Box sx={{ textAlign: "center", fontSize: "16px" }}>
              PREGUNTAS FRECUENTES
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link
                href={"/"}
                color="inherit"
                sx={{ textDecoration: "none", fontSize: "12px" }}
              >
                Como alquilo un vehiculo?
              </Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link
                href={"/"}
                color="inherit"
                sx={{ textDecoration: "none", fontSize: "12px" }}
              >
                Donde puedo recoger y Entregar el vehiculo Alquilado?
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            style={{ padding: "30px", borderRight: "solid 0.5px" }}
          >
            <Box sx={{ textAlign: "center", fontSize: "16px" }}>
              ENLACES ÚTILES{" "}
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link
                href={"/home"}
                color="inherit"
                sx={{ textDecoration: "none", fontSize: "12px" }}
              >
                Inicio
              </Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link
                href={"/about"}
                color="inherit"
                sx={{ textDecoration: "none", fontSize: "12px" }}
              >
                Nosotros
              </Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link
                href={"/"}
                color="inherit"
                sx={{ textDecoration: "none", fontSize: "12px" }}
              >
                Terminos y Condiciones
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} style={{ paddingTop: "30px" }}>
            <Box sx={{ textAlign: "center", fontSize: "16px" }}>
              CONTÁCTANOS
            </Box>
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
                  fontSize: "12px",
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
                  fontSize: "12px",
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
                  fontSize: "12px",
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
                  fontSize: "12px",
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
        </Grid>
      </Container>
    </Box>
  );
}
