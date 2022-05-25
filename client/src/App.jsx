import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Booking} from './components/Booking.jsx' 

import './App.css';


export default function App() {
  
 
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='*' element={<Home />}></Route>
    <Route path='/home' element={<Home />}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
      
    
  );
}
