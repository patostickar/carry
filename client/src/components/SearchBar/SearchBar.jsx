import Location from "./locationInput";
import Calendar from "./Calendar";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../styles/SearchBar.modules.css";

// Se puede busar por nombre, ciudad o estado
export default function SearchBar() {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/searchResult", {
      state: {
        destination,
        date,
        
      },
    });
  };
  console.log(date);

  return (
    <div className="searchbar">
      <div className="headerContainer">
        <h1 className="headerTitle">Car hire for any kind of trip</h1>
        <p className="headerDesc">
          Compare deals from the biggest car hire companies
        </p>

        <div className="inputRadioContainer">
          <div className="headerInputRadio">
            <input type="radio" name="Return to same location" id="radio1" selected />
            <label htmlFor="radio1">Return to same location</label>
          </div>

          <div className="headerInputRadio">
            <input type="radio" name="Return to same location" id="radio2" />
            <label htmlFor="radio2">Return to different location</label>
          </div>
        </div>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <Location type='pickUp' />
          </div>
          <div className="headerSearchItem">
          <Location type='dropOff' />
          </div>
          <div className="headerSearchItem">
            {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
            <div className="startDateContainer">
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
            </div>
            <div className="endDateContainer">
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            </div>
            {openDate && (
              <DateRange
                className="headerSearchDate"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerButton" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
