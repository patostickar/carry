// component
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Volver al inicio',
    path: '/',
    icon: getIcon('eva:home-outline'),
  },
  {
    title: 'Estadisticas',
    path: '/Adminpanel',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'gestionar usuarios',
    path: '/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Agregar autos a stock',
    path: '/carcreate',
    icon: getIcon('eva:car-outline'),
  },
  {
    title: 'crear agencia',
    path: '/locationcreate',
    icon: getIcon('eva:briefcase-outline'),
  },
  {
    title: 'Crear un auto',
    path: '/cartypecreate',
    icon: getIcon('eva:car-fill'),
  },
  {
    title: 'Reservas de usuarios',
    path: '/bookingsadmin',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
];

export default navConfig;
