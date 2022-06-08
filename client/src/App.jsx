
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllLocations } from './redux/searchBar';
import { fetchTestimonials } from './redux/testimonials';
import { ClearUser, fetchUser } from './redux/user.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import logError from './components/GeneralFuntions/logError';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import CarCreate from './components/AdminPanel/CreateForms/CarCreate';
import CarTypeCreate from './components/AdminPanel/CreateForms/CarTypeCreate';
import LocationCreate from './components/AdminPanel/CreateForms/LocationCreate';
import Account from './pages/Account';
import Reservation from './pages/Reservation/Reservation';
import AdminUsersManagement from './components/AdminPanel/AdminUsersManagement'
import NotFound from './pages/NotFound';
import "./App.css";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Response from './pages/MPrespose';


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
          await axios.post("/customers", user);
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/terminos-condiciones" element={<TermsAndConditions />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/carcreate' element={<CarCreate />} /> {/* componenete de adminPanel*/}
          <Route path='/cartypecreate' element={<CarTypeCreate />} />{/*  componenete de adminPanel*/}
          <Route path='/locationcreate' element={<LocationCreate />} />{/*  componenete de adminPanel*/}
          <Route path="/usermanagement" element={<AdminUsersManagement />} />{/*  componenete de adminPanel*/}
          <Route path='/profile' element={<Account />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/searchResult' element={<SearchResults />} />
          <Route path="/Response" element={<Response/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
