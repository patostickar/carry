
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { putUser } from '../../redux/user';

export const UserCard = ({ setRenderControl, renderControl }) => {
  const dispatch = useDispatch();
  const { User } = useSelector((state) => state.user);
  

  

  const handleEdit = (event) => {
      console.log('Evento click Editar')
    setRenderControl({
                  personalInfo: true,
                  review: false,
                  booking: false,
                  useCard:false
     })
    
  };

  

  return (
    <>
      <Grid item xs={0.5}></Grid>
      <Grid
        item
        xs={6}
              >
        <Box
          style={{ display: 'flex', justifyContent: 'center', padding: '10px', margin:'0px' }}
        >
          <Avatar
            src={User?.img}
            sx={{
              height: 100,
              mb: 0,
              width: 100,
            }}
          />
        </Box>
       <Box style={{textAlign:'center'}}>
            <Typography style={{margin:'0px', padding:'0px', fontSize:'24px'}}>
                  Informacion Personal
            </Typography>
            
            {User?.firstName&&(
            <Typography align='center' style={{fontSize:'18px'}}>
            <strong>Nombre: </strong> { User?.firstName}{' '}{User?.lastName}
            </Typography>)
            }

            {User?.email&&(
            <Typography align='center' style={{fontSize:'18px'}}>
             <strong>Email: </strong> { User?.email} 
            </Typography>
            )}
           
            {User?.street&&(
            <Typography align='center' style={{fontSize:'18px'}}>
             <strong>Direccion: </strong> { User?.street}
            </Typography>
            )}

            {User?.city&&(
            <Typography align='center' style={{fontSize:'18px'}}>
             <strong>Ciudad: </strong> { User?.city}
            </Typography>
            )}

            {User?.phone&&(
            <Typography align='center' style={{fontSize:'18px'}}>
             <strong>Telefono: </strong> { User?.phone}
            </Typography>
            )}
            {User?.postalCode&&(
            <Typography align='center' style={{fontSize:'18px'}}>
             <strong>Codigo Postal: </strong> { User?.postalCode}
            </Typography>
            )}
         </Box>     
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
              }}
            > <Button color='primary' variant='contained' type='submit'
            onClick={handleEdit}>
                Editar
              </Button>
            </Box>
            
          
       
      </Grid>
    </>
  );
};