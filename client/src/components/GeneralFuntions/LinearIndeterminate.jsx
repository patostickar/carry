import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate({ cartypes }) {
  return (
    <Box sx={{ width: '805px' }}>
      {cartypes !== 0 ? (
        <>
          <LinearProgress />
          <h1>Buscando los mejores autos para vos... 🚘</h1>
        </>
      ) : (
        <h1>
          No tenemos autos disponibles en esta Ubicación, intenta otra búsqueda
          !
        </h1>
      )}
    </Box>
  );
}
