import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';
import { putUser } from '../../redux/user';

export const Sidebar = ({ setRenderControl, renderControl }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth0();

  const handleDeleteAccount = () => {
    Swal.fire({
      title: 'Esta seguro de Eliminar su cuenta?',
      text: 'Usted no podra revertir esta Accion!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(putUser(user.id, { isBanned: true }));
        logout();
      }
    });
  };

  return (
    <>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={2} style={{ marginBottom: '20px' }}>
        <Grid
          p={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'solid 1px lightgrey',
            borderRadius: '8px',
          }}
        >
          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <PersonIcon color='primary' />
            <Typography
              onClick={() => {
                setRenderControl({
                  personalInfo: true,
                  review: false,
                  booking: false,
                });
              }}
              style={{ fontWeight: 'lighter' }}
            >
              Informacion Personal
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography
              onClick={() =>
                setRenderControl({
                  personalInfo: false,
                  review: false,
                  booking: true,
                })
              }
            >
              Mis Reservas
            </Typography>
          </Box>
          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography
              onClick={() =>
                setRenderControl({
                  personalInfo: false,
                  security: false,
                  review: true,
                })
              }
            >
              Mis Review
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <DeleteIcon color='primary' />
            <Typography onClick={handleDeleteAccount}>
              Eliminar Cuenta
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <ExitToAppIcon color='primary' />
            <Typography onClick={() => navigate('/')}>Salir</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
