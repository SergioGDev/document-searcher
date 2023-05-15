import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getDocumentListFiltered } from "../functions/documentsListFiltered";
import { RootState } from "../store/store";

export const useDocumentListFiltered = () => {
    const { filterObject } = useSelector((state: RootState) => state.filter);
    const filterList = useMemo(() => getDocumentListFiltered(filterObject), [filterObject]);
  
    return { filterList };
  }