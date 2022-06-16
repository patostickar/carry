import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../redux/carsResults";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./styles/carCategory.module.css";

export default function SelectSmall() {
  const { sort } = useSelector((state) => state.carsResults);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className={styles.all}>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 200 }} size="small">
        <InputLabel id="demo-select-small">Ordenar</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={sort}
          label="Ordenar"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Por defecto</em>
          </MenuItem>
          <MenuItem value={"asc"}>Menor a Mayor precio</MenuItem>
          <MenuItem value={"dsc"}>Mayor a Menor precio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
