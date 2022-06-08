import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllLocations } from './redux/searchBar';
import { fetchTestimonials } from './redux/testimonials';
import { ClearUser, fetchUser } from './redux/user.js';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ProtectedRoute } from './components/protected-route';
import axios from 'axios';
import logError from './components/GeneralFuntions/logError';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import CarCreate from './components/CarCreateForm/CarCreate';
import CarTypeCreate from './components/CarCreateForm/CarTypeCreate';
import LocationCreate from './components/CarCreateForm/LocationCreate';
import Account from './components/Account/Account';
import Reservation from './components/Reservation/Reservation';
import AdminUsersManagement from './components/GestionDeUsuarios/AdminUsersManagement';
import NotFound from './components/NotFound';

import './App.css';
import Payment from './pages/Payment';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(ClearUser());
    } else {
      async function setCustomer() {
        try {
          await axios.post('/customers', user);
        } catch (error) {
          logError(error);
        }
        dispatch(fetchUser(user.email));
      }
      setCustomer();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(fetchAllLocations());
    dispatch(fetchTestimonials());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/adminPanel'
          element={<ProtectedRoute component={AdminPanel} />}
        />
        <Route
          path='/carcreate'
          element={<ProtectedRoute component={CarCreate} />}
        />
        <Route
          path='/cartypecreate'
          element={<ProtectedRoute component={CarTypeCreate} />}
        />
        <Route
          path='/locationcreate'
          element={<ProtectedRoute component={LocationCreate} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute component={Account} />}
        />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/searchResult' element={<SearchResults />} />
        <Route
          path='/payment'
          element={<ProtectedRoute component={Payment} />}
        />
        <Route path='/terminos-condiciones' element={<TermsAndConditions />} />
        <Route
          path='/usermanagement'
          element={<ProtectedRoute component={AdminUsersManagement} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
