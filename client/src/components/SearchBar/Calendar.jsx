import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Calendar() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <>
      <div className='headerSearchItem'>
        {/* <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' /> */}
        <span
          onClick={() => setOpenDate(!openDate)}
          className='headerSearchText'
        >
          {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
            date[0].endDate,
            'MM/dd/yyyy'
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
          />
        )}
      </div>
    </>
  );
}
