import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Booking} from './components/Booking.jsx' 

import './App.css';

import SearchList from './pages/searchList/SearchList';

function App() {

 
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />}></Route>
      <Route path='/booking' element={<Booking />}></Route>
      <Route path="/searchResult" element={<SearchList />} />
      </Routes>
    </BrowserRouter>
    </>


  );
}

export default App;