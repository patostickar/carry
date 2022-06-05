import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllLocations } from './redux/searchBar';
import { fetchTestimonials } from './redux/testimonials';
import { ClearUser, fetchUser } from './redux/user.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
// import Profile from './components/Profile';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import CarCreate from './components/CarCreateForm/CarCreate';
import CarTypeCreate from './components/CarCreateForm/CarTypeCreate';
import LocationCreate from './components/CarCreateForm/LocationCreate';
import Account from './components/Account/Account';
import Reservation from './components/Reservation/Reservation';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    isAuthenticated && axios.post('/customers', user);
    isAuthenticated && dispatch(fetchUser(user.email));
    !isAuthenticated && dispatch(ClearUser());
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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/carcreate' element={<CarCreate />} />
          <Route path='/cartypecreate' element={<CarTypeCreate />} />
          <Route path='/locationcreate' element={<LocationCreate />} />
          <Route path='/profile' element={<Account />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/searchResult' element={<SearchResults />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
