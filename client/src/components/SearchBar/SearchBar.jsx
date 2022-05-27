import Location from './locationInput';
import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/SearchBar.modules.css';

// Se puede busar por nombre, ciudad o estado
export default function SearchBar() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/searchResult');
  };

  return (
    <div className='searchbar'>
      <div className='headerContainer'>
        <h1 className='headerTitle'>Car hire for any kind of trip</h1>
        <p className='headerDesc'>
          Compare deals from the biggest car hire companies
        </p>

        <div className='inputRadioContainer'>
          <div className='headerInputRadio'>
            <input
              type='radio'
              name='Return to same location'
              id='radio1'
              selected
            />
            <label htmlFor='radio1'>Return to same location</label>
          </div>

          <div className='headerInputRadio'>
            <input type='radio' name='Return to same location' id='radio2' />
            <label htmlFor='radio2'>Return to different location</label>
          </div>
        </div>

        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <Location type='Pick-up' />
          </div>
          <div className='headerSearchItem'>
            <Location type='Drop-off' />
          </div>
          <Calendar />
          <div className='headerSearchItem'>
            <button className='headerButton' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
