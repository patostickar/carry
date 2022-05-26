import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/SearchBar.modules.css';
import { useDispatch } from 'react-redux';
import { setPickupTime, setDroppOffTime } from '../../redux/searchBar';

export default function Calendar() {
  const [openDate, setOpenDate] = useState(false);
  const dispatch = useDispatch();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className='headerSearchItem'>
      {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
      <div className='startDateContainer'>
        <span
          onClick={() => setOpenDate(!openDate)}
          className='headerSearchText'
        >{`${format(date[0].startDate, 'MM/dd/yyyy')}`}</span>
      </div>
      <div className='endDateContainer'>
        <span
          onClick={() => setOpenDate(!openDate)}
          className='headerSearchText'
        >{`${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
      </div>
      {openDate && (
        <DateRange
          className='headerSearchDate'
          editableDateInputs={true}
          onChange={(item) => {
            dispatch(setPickupTime(item.selection.startDate.getTime()));
            dispatch(setDroppOffTime(item.selection.endDate.getTime()));
            setDate([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
      )}
    </div>
  );
}
