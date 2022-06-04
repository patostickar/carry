import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllLocations } from './redux/searchBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking } from './components/Booking.jsx';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './components/About.jsx';
import Profile from './components/Profile.jsx';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel.jsx';
import CarCreate from './components/CarCreateForm/CarCreate.jsx';
import CarTypeCreate from './components/CarCreateForm/CarTypeCreate.jsx';
import LocationCreate from './components/CarCreateForm/LocationCreate.jsx';
import './App.css';
import { fetchTestimonials } from './redux/testimonials.js';

function App() {
  const dispatch = useDispatch();

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
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/searchResult' element={<SearchResults />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/carcreate' element={<CarCreate />} />
          <Route path='/cartypecreate' element={<CarTypeCreate />} />
          <Route path='/locationcreate' element={<LocationCreate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
