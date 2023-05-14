import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { restartFilterObject } from "../../store/filter/filterSlice";

export const CleanFiltersButton = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(restartFilterObject());
  };

  return (
    <Button variant="contained" onClick={handleOnClick}>
      Clean filters
    </Button>
  );
};
