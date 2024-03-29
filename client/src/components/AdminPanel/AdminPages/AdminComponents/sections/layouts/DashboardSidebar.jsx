import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Stack, Avatar } from '@mui/material';
// mock
// import account from '../../_mock/account';
// hooks

import logo from '../../../../../../assets/logo.png';

import useResponsive from '../../hooks/useResponsive';

// components

import Scrollbar from '../../Scrollbar';

import NavSection from '../../NavSection';
//
import navConfig from '../../../AdminComponents/NavConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    backgroundColor: 'rgb(118, 145, 255)',

    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const { firstName, lastName, img } = useSelector((state) => state.user);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        {'Carry Admin Panel'}
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline='none' component={RouterLink} to='/profile'>
          <AccountStyle>
            <Avatar src={img} alt='userPic' />
            <Box sx={{ ml: 2 }}>
              <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                {firstName}
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {lastName}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems='center'
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        >
          <Box
            component='img'
            src={logo}
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant='persistent'
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
