import Location from "./locationInput";
import Calendar from "./Calendar";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../styles/SearchBar.modules.css";

// Se puede busar por nombre, ciudad o estado
export default function SearchBar() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/searchResult");
  };

  return (
    <div className="searchbar">
      <div className="headerContainer">
        <h1 className="headerTitle">
          Alquiler de autos para cualquier tipo de viaje
        </h1>
        <p className="headerDesc">
          Compara ofertas de las mayores empresas de alquiler de autos
        </p>

        <div className="inputRadioContainer">
          <div className="headerInputRadio">
            <input
              type="radio"
              name="Return to same location"
              id="radio1"
              selected
            />
            <label htmlFor="radio1">Devolver en la misma ubicacion</label>
          </div>

          <div className="headerInputRadio">
            <input type="radio" name="Return to same location" id="radio2" />
            <label htmlFor="radio2">Devolver en una ubicacion diferente</label>
          </div>
        </div>


        <div className="headerSearch">
          <div className="headerSearchItem">
            <Location type="pickUp" />
          </div>
          <div className="headerSearchItem">
            <Location type="dropOff" />

          </div>
          <Calendar />
          <div className="headerSearchItem">
            <button className="headerButton" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
