import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: "805px" }}>
      <LinearProgress />
      <h1>Buscando los mejores autos para vos... 🚘</h1>
    </Box>
  );
}
