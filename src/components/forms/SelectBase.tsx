import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
import { FILTER_SELECT, SelectBaseProps } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setFilterObject } from "../../store/filter/filterSlice";
import { useEffect, useState } from 'react';
import { RootState } from "../../store/store";

export const SelectBase = ({ label, name, options }: SelectBaseProps) => {

  const dispatch = useDispatch();
  const { filterObject } = useSelector( (state: RootState) => state.filter )
  const filterKey = `${name}${FILTER_SELECT}`;
  const [value, setValue] = useState('');

  // When the filter is empty, we'll reset the value.
  useEffect(() => {
    if (Object.keys(filterObject).length === 0) {
      setValue('');
    }
  }, [filterObject]);

  const handleOnChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);

    dispatch(
      setFilterObject({
        nameSelect: filterKey,
        value: event.target.value as string,
      })
    );
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="country-select-label"
        sx={{ backgroundColor:'white', paddingLeft: 1, paddingRight: 1 }}>{ label }</InputLabel>
      <Select
        labelId={ `${name}-label` }
        id={ `${name}-select` }
        defaultValue={value}
        value={value}
        onChange={handleOnChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
