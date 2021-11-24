import React from "react";
import { Grid } from "@mui/material";
const CustomGrid = ({children,lg=8}) => {

  return (
    <Grid container item direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={9} lg={lg} style={{ marginTop: "10px" }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default CustomGrid;