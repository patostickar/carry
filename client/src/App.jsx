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
import About from './pages/About';
import Account from './pages/Account';
import AdminPanel from './pages/AdminPanel';
// import AdminUsersManagement from './components/AdminPanel/AdminUsersManagement'
import CarCreate from './components/AdminPanel/CreateForms/CarCreate';
import CarTypeCreate from './components/AdminPanel/CreateForms/CarTypeCreate';
import Footer from './components/Footer';
import Home from './pages/Home';
import LocationCreate from './components/AdminPanel/CreateForms/LocationCreate';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Reservation from './pages/Reservation';
import Response from './pages/MPrespose';
import SearchResults from './pages/SearchResults';
import TermsAndConditions from './pages/TermsAndConditions/';

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
        {/* componenete de adminPanel */}
        <Route
          path='/carcreate'
          element={<ProtectedRoute component={CarCreate} />}
        />
        {/* componenete de adminPanel */}
        <Route
          path='/cartypecreate'
          element={<ProtectedRoute component={CarTypeCreate} />}
        />
        {/* componenete de adminPanel */}
        <Route
          path='/locationcreate'
          element={<ProtectedRoute component={LocationCreate} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute component={Account} />}
        />
        <Route path='/reservation' element={<Reservation />} />
        <Route
          path='/Response'
          element={<ProtectedRoute component={Response} />}
        />
        <Route path='/searchResult' element={<SearchResults />} />
        <Route path='/terminos-condiciones' element={<TermsAndConditions />} />
        {/* <Route
          path='/usermanagement'
          element={<ProtectedRoute component={AdminUsersManagement} />}
        /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
