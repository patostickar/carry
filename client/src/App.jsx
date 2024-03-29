import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllLocations } from './redux/searchBar';
import { clearUser, setUser } from './redux/user.js';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ProtectedRoute } from './protected-route';
import axios from 'axios';
import About from './pages/About';
import Account from './pages/Account';
import AdminCard from './components/AdminPanel/AdminPanelCard';
import CarCreate from './components/AdminPanel/CreateForms/CarCreate';
import CarTypeCreate from './components/AdminPanel/CreateForms/CarTypeCreate';
import Home from './pages/Home';
import LocationCreate from './components/AdminPanel/CreateForms/LocationCreate';
import NotAllowed from './pages/NotAllowed';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';
import Response from './pages/MPrespose';
import SearchResults from './pages/SearchResults';
import TermsAndConditions from './pages/TermsAndConditions/';
import User from './components/AdminPanel/AdminPages/AdminComponents/sections/User';
import BookingsAdmin from './components/AdminPanel/AdminPages/AdminComponents/sections/layouts/BookingsAdmin';

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearUser());
    } else {
      async function setCustomer() {
        try {
          const res = await axios.post('/customers', user);
          localStorage.setItem('token', `Bearer ${res.headers.authorization}`);
          dispatch(setUser(res.data.customer));
        } catch (error) {
          console.log(error);
        }
      }
      setCustomer();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  return (
    <Routes>
      <Route
        path='/adminPanel'
        element={<ProtectedRoute component={AdminCard} role='admin' />}
      />
      <Route
        path='/cartypecreate'
        element={<ProtectedRoute component={CarTypeCreate} role='admin' />}
      />
      <Route
        path='/locationcreate'
        element={<ProtectedRoute component={LocationCreate} role='admin' />}
      />
      <Route
        path='/user'
        element={<ProtectedRoute component={User} role='admin' />}
      />
      <Route path='/bookingsadmin' element={<BookingsAdmin />} />

      <Route
        path='/carcreate'
        element={<ProtectedRoute component={CarCreate} role='admin' />}
      />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/notAllowed' element={<NotAllowed />} />
      <Route path='/profile' element={<ProtectedRoute component={Account} />} />
      <Route path='/booking' element={<Booking />} />
      <Route
        path='/Response'
        element={<ProtectedRoute component={Response} />}
      />
      <Route path='/searchResult' element={<SearchResults />} />
      <Route path='/terminos-condiciones' element={<TermsAndConditions />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
