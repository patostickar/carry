import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SearchList from './pages/searchList/SearchList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchResult' element={<SearchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
