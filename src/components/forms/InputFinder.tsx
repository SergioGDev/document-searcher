import { FormControl, Input, InputLabel } from "@mui/material";
import { FILTER_INPUT, InputFinderProps } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { setFilterObject } from "../../store/filter/filterSlice";
import { RootState } from "../../store/store";

export const InputFinder = ({ name }: InputFinderProps) => {
  
  const [value, setValue] = useState('');
  const { filterObject } = useSelector( (state: RootState) => state.filter )
  const filterKey = `${name}${FILTER_INPUT}`;
  const dispatch = useDispatch();

  // When the filter is empty, we'll reset the value.
  useEffect(() => {
    if (Object.keys(filterObject).length === 0) {
      setValue('');
    }
  }, [filterObject]);

  const onChangeInputFinderValue = (event: BaseSyntheticEvent) => {
    setValue(event.target.value as string);

    dispatch(
      setFilterObject({
        nameSelect: filterKey,
        value: event.target.value as string,
      })
    );
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="input-finder">Seach the document...</InputLabel>
      <Input
        id={`${name}-finder`}
        name={ `${name}-finder` }
        type="text"
        onChange={onChangeInputFinderValue}
        value={value}
      />
    </FormControl>
  );
};
