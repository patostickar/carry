import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPickupTime, setDroppOffTime } from '../../redux/searchBar';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useOutsideAlerter } from '../GeneralFuntions/useOutsideAlerter';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './styles/calendar.module.css';

// I had to mix redux and local state, because I can only store timestamp on redux,
// but the Calendar needs an object Date to work properly

export default function Calendar() {
  const [openDate, setOpenDate] = useState(false);
  const { pickupDate, dropoffDate } = useSelector((state) => state.searchBar);
  const [date, setDate] = useState([
    {
      startDate: new Date(pickupDate),
      endDate: new Date(dropoffDate),
      key: 'selection',
    },
  ]);
  // console.log(date);
  const dispatch = useDispatch();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenDate);
  return (
    <div className={styles.headerSearchItem} ref={wrapperRef}>
      {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
      <div className={styles.startDateContainer}>
        <span
          onClick={() => setOpenDate(!openDate)}
          className={styles.headerSearchText}
        >{`${format(new Date(pickupDate), 'MM/dd/yyyy')}`}</span>
      </div>
      <div className={styles.endDateContainer}>
        <span
          onClick={() => setOpenDate(!openDate)}
          className={styles.headerSearchText}
        >{`${format(new Date(dropoffDate), 'MM/dd/yyyy')}`}</span>
      </div>
      {openDate && (
        <DateRange
          className={styles.headerSearchDate}
          editableDateInputs={true}
          onChange={(item) => {
            setDate([item.selection]);
            const { endDate, startDate } = item.selection;
            dispatch(setPickupTime(startDate.getTime()));
            dispatch(setDroppOffTime(endDate.getTime()));
          }}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
      )}
    </div>
  );
}
/**
 * Hook that alerts clicks outside of the passed ref
 */

/**
 * Component that alerts if you click outside of it
 */
