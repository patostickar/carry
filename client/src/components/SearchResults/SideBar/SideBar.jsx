import { useDispatch } from "react-redux";
import { clearAllFilters } from "../../../redux/carsResults.js";
import Box from "@mui/material/Box";
import Transmission from "./transmission";
import CarCategory from "./carCategory";
import CarSpecs from "./carSpecs";
import Divider from "@mui/material/Divider";
import styles from "./styles/SideBar.module.css";

function SideBar() {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={styles.googleMap}></div>
      <h2>Filter</h2>
      <button
        className={styles.siCheckButton}
        onClick={() => dispatch(clearAllFilters())}
      >
        Clear all filters
      </button>
      <Divider />
      <Transmission />
      <Divider />
      <CarSpecs />
      <Divider />
      <CarCategory />
    </Box>
  );
}

export default SideBar;
