import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';

import './App.css';


export default function App() {
  
 
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
      
    
  );
}
