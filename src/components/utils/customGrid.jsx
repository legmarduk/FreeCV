import React from "react";
import { Grid } from "@mui/material";
const CustomGrid = ({children}) => {

  return (
    <Grid container item direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={9} lg={8} style={{ marginTop: "10px" }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default CustomGrid;