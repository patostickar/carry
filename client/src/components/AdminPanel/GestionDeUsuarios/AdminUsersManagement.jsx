import { React, useState, useEffect } from 'react';

import DashboardNavbar from '../AdminPages/AdminComponents/sections/layouts/DashboardNavBar';
import DashboardSidebar from '../AdminPages/AdminComponents/sections/layouts/DashboardSidebar';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import { Card, CardHeader } from '@mui/material';

export default function DataTable() {
  const [currentCustomers, setCurrentCustomers] = useState([]);
  let totalCustomers = 0;

  const getUsers = async () => {
    // eslint-disable-next-line prefer-const
    let customers = await axios.get('/customers', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setCurrentCustomers(customers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (currentCustomers) {
    totalCustomers = currentCustomers.data;
  }

  const APP_BAR_MOBILE = 64;
  const APP_BAR_DESKTOP = 0;

  const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
  });

  const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <RootStyle>
      <DashboardSidebar />
      <DashboardNavbar />
      <MainStyle>
        <div
          style={{ height: 400, width: '100%', display: 'inline-list-item' }}
        >
          <CardHeader
            title={'Gestion de usuarios'}
            subheader={'panel de administracion de usuarios'}
          />
          {totalCustomers?.map((c) => (
            <Card key={c?.id}>
              Email: {c?.email}, Nombre: {c?.firstName}, Apellido: {c?.lastName}
              <input type='checkbox' />
            </Card>
          ))}
        </div>
      </MainStyle>
    </RootStyle>
  );
}
