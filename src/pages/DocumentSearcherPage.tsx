import { Grid } from "@mui/material";

import { FilterBox } from "../components/FilterBox/FilterBox";
import { DocumentList } from "../components/DocumentList/DocumentList";

export const DocumentSearcherPage = () => {

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        backgroundColor: "white",
      }}
    >
      <FilterBox />
      <DocumentList />
    </Grid>
  );
};
