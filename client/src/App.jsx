import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking } from './components/Booking.jsx';
import Home from './pages/Home';
import SearchList from './pages/SearchList';
import Profile from './components/Profile.jsx';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/searchResult' element={<SearchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
