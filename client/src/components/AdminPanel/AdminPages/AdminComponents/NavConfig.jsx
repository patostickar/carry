// component
import Iconify from "./Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Estadisticas',
    path: '/estadisticas',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'gestionar usuarios',
    path: '/usermanagement',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Agregar autos a stock',
    path: '/carcreate',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'crear agencia',
    path: '/locationcreate',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Crear un auto',
    path: '/cartypecreate',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
