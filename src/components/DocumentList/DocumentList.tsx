import { Grid, Typography } from "@mui/material";

import { DocumentData } from '../../types/types';
import { DocumentItemList } from "./DocumentItemList";
import { useDocumentListFiltered } from "../../hooks/useDocumentListFiltered";

export const DocumentList = () => {
  
  const {filterList} = useDocumentListFiltered();
  
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        backgroundColor: "white"
      }}
    >
      <Typography variant='h4' sx={{ color: 'black', mb: 2 }}>Document List</Typography>

      {
        (filterList.length === 0) ? <Typography variant='h6' sx={{ color: 'black', mb: 2 }}>No documents found...</Typography> :
        filterList.map( (doc: DocumentData, index: number) => <DocumentItemList key={ index } documentData={ doc } /> )
      }
    </Grid>
  );
};
