import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchcount, fetchTestimonials } from './redux/generalReducer.js';

function App() {
  const { Count } = useSelector((state) => state.generalReducer);
  
  
  
  const dispatch = useDispatch();
  const Getrandom = () =>{
    console.log(Count)
    const id1 = Math.floor(Math.random()*(Count-1+1)+1)
    let id2 = Math.floor(Math.random()*(Count-1+1)+1)
    if(id2 === id1){id2 = Math.floor(Math.random()*(Count-1+1)+1)}
    let id3 = Math.floor(Math.random()*(Count-1+1)+1)
    if(id3 === id1 || id3 === id2){id3 = Math.floor(Math.random()*(Count-1+1)+1)}

    return {id1,id2,id3}
  }
  
  
  useEffect(() => {  
    dispatch(fetchcount())
    dispatch(fetchAllLocations());
  }, [])
  useEffect(() => {
    const{id1,id2,id3} = Getrandom()
    console.log(id1,id2,id3)
    if(id1+id2+id3 !== 3){dispatch(fetchTestimonials(id1,id2,id3))}
   
 
 }, [Count])
 


  
  

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
