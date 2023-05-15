import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
import { FILTER_SELECT, SelectBaseProps } from '../../types/types';
import { useFilterInput } from "../../hooks/useFilterInput";

export const SelectBase = ({ label, name, options }: SelectBaseProps) => {

  const { value, handleOnChange } = useFilterInput({name, typeFilter: FILTER_SELECT}); 

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
        MenuProps={{ PaperProps: {sx: { maxHeight: '300px' }} }}
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
