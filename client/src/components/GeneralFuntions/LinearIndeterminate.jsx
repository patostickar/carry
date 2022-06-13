import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate({cartypes}) {
  return (
    <Box sx={{ width: "805px" }}>
      {cartypes !== 0 ? (<>
      <LinearProgress />
      <h1>Buscando los mejores autos para vos... 🚘</h1></>):
      <div>no tenemos autos disponibles en esta hubicacion</div>}
     
    </Box>
   
  );
}
