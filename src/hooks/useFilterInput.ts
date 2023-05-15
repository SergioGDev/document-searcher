import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { setFilterObject } from "../store/filter/filterSlice";
import { SelectChangeEvent } from "@mui/material";

type UseFilterInputProps = {
    name: string;
    typeFilter: string;

}

export const useFilterInput = ({name, typeFilter}: UseFilterInputProps) => {
    
  const dispatch = useDispatch();
  const { filterObject } = useSelector( (state: RootState) => state.filter )
  const filterKey = `${name}${typeFilter}`;
  const [value, setValue] = useState('');

  // When the filter is empty, we'll reset the value.
  useEffect(() => {
    if (Object.keys(filterObject).length === 0) {
      setValue('');
    }
  }, [filterObject]);

  const handleOnChange = (event: BaseSyntheticEvent | SelectChangeEvent) => {
    setValue(event.target.value as string);

    dispatch(
      setFilterObject({
        nameSelect: filterKey,
        value: event.target.value as string,
      })
    );
  };

  return {
    handleOnChange,
    value,
  }

}
