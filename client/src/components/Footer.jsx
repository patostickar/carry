import { Grid, Box, Container, Link, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link as Link1} from 'react-router-dom';
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    
    <Grid container
    sx={{
      backgroundColor: "#1976d2",
      marginTop: "40px",
      color: "white",
      justifyItems: "center",
    }}
    style={{backgroundColor:"#1976d2"}}
    >
      
       <Grid item xs={4} style={{padding:'20px', borderRight:'solid 1px white'}}>
        <Typography variant='body2' style={{textAlign:'center', fontWeight:'bolder'}}>ATENCION AL PUBLICO</Typography> 
        <Typography style={{fontSize:'12px', textAlign:'center'}}>
          DPTO DE VENTAS<br />
          Lunes a Sabado 08:00 a 18:00h<br />
          DPTO DE SOPORTE<br />
          Lunes a Viernes 08:00 a 18:00h
         </Typography> 
        </Grid>
       <Grid item xs={4} style={{padding:'20px', borderRight:'solid 1px white',textAlign:'center' }}>
       <Typography variant='body2' style={{textAlign:'center', fontWeight:'bolder'}}>ENLACES UTILES</Typography>
       <Link href={"/home"} color="inherit" sx={{ textDecoration: "none", fontSize: "12px"}} >Inicio <br /></Link>
       <Link href={"/about"} color="inherit" sx={{ textDecoration: "none", fontSize: "12px"}} >Nosotros <br /></Link>
       <Link href={"/about"} color="inherit" sx={{ textDecoration: "none", fontSize: "12px"}} >Terminos y Condiciones <br /></Link>
       
       
       </Grid>
       <Grid item xs={4} style={{padding:'20px'}}>
       <Typography variant='body2' style={{textAlign:'center', fontWeight:'bolder'}}>CONTÁCTENOS</Typography>  
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
    
    
    
    
    
    
    

  );
}
