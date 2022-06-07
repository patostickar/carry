import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPickupTime, setDroppOffTime } from '../../redux/searchBar';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useOutsideAlerter } from '../GeneralFuntions/useOutsideAlerter';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './styles/calendar.module.css';

export default function Calendar() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
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
        >{`${format(date[0].startDate, 'MM/dd/yyyy')}`}</span>
      </div>
      <div className={styles.endDateContainer}>
        <span
          onClick={() => setOpenDate(!openDate)}
          className={styles.headerSearchText}
        >{`${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
      </div>
      {openDate && (
        <DateRange
          className={styles.headerSearchDate}
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
/**
 * Hook that alerts clicks outside of the passed ref
 */

/**
 * Component that alerts if you click outside of it
 */
