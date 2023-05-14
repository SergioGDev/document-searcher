import { Grid } from "@mui/material";

import { SelectBase } from "../forms/SelectBase";
import { getCountryList } from "../../functions/countryList";
import { getVersionsList } from "../../functions/versionsList";

import { InputFinder } from "../forms/InputFinder";
import { CleanFiltersButton } from "./CleanFiltersButton";

export const FilterBox = () => {
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

        border: "1px solid black",
        borderRadius: 4,
        boxShadow: "1px 1px 1px #00000040",
        padding: 5,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          gap: 5,
          backgroundColor: "white",
        }}
      >
        <Grid item sx={{ width: "300px" }}>
          <SelectBase
            label={"Country"}
            name={"country"}
            options={getCountryList()}
          />
        </Grid>

        <Grid item sx={{ width: "300px" }}>
          <SelectBase
            label={"Version"}
            name={"version"}
            options={getVersionsList()}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          gap: 5,
          backgroundColor: "white",
        }}
      >
        <Grid item sx={{ width: "600px" }}>
          <InputFinder name="text" />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          gap: 5,
          backgroundColor: "white",
        }}
      >
        <Grid item sx={{ width: "200px" }}>
          <CleanFiltersButton />
        </Grid>
      </Grid>
    </Grid>
  );
};
