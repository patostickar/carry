import { useDispatch, useSelector } from "react-redux";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setCarCategory } from "../../../redux/carsResults.js";

export default function CarCategory() {
  const { small, medium, large, premium, convertible, minivan, suvs } =
    useSelector((state) => state.carsResults.filters.carCategory);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { checked, name } = event.target;
    dispatch(setCarCategory({ name, checked }));
  };

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Car Category</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={small}
              onChange={handleChange}
              disabled={false}
              name="small"
            />
          }
          label="Small"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={medium}
              onChange={handleChange}
              disabled={false}
              name="medium"
            />
          }
          label="Medium"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={large}
              onChange={handleChange}
              disabled={false}
              name="large"
            />
          }
          label="Large"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={premium}
              onChange={handleChange}
              disabled={false}
              name="premium"
            />
          }
          label="Premium"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={convertible}
              onChange={handleChange}
              disabled={false}
              name="convertible"
            />
          }
          label="Convertible"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={minivan}
              onChange={handleChange}
              disabled={false}
              name="minivan"
            />
          }
          label="Minivan"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={suvs}
              onChange={handleChange}
              disabled={false}
              name="suvs"
            />
          }
          label="SUVs"
        />
      </FormGroup>
    </FormControl>
  );
}
