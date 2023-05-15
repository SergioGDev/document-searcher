import { FormControl, Input, InputLabel } from "@mui/material";

import { FILTER_INPUT, InputFinderProps } from "../../types/types";
import { useFilterInput } from "../../hooks/useFilterInput";

export const InputFinder = ({ name }: InputFinderProps) => {
  
  const {value, handleOnChange} = useFilterInput({ name, typeFilter: FILTER_INPUT });

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="input-finder">Seach the document...</InputLabel>
      <Input
        id={`${name}-finder`}
        name={ `${name}-finder` }
        type="text"
        onChange={handleOnChange}
        value={value}
      />
    </FormControl>
  );
};
