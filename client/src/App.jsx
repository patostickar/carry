import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking } from './components/Booking.jsx';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './components/About.jsx';
import Profile from './components/Profile.jsx';
import SearchResults from './pages/SearchResults';
import SideBar from './components/SearchResults/SideBar/SideBar';
import './App.css';

function App() {
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
          <Route path='/material' element={<SideBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
