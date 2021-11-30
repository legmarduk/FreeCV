import React from "react";
import { Grid, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Grid>
      <AppBar className={classes.appBar} elevation="0" color="transparent">
        <h1 className={classes.title}>FREE CV.</h1>
      </AppBar>
    </Grid>
  )
}

const useStyles = makeStyles({
  appBar:{
    background:"none",
  },
  title:{
    marginLeft:"10px",
    color:"white"
  }
})

export default Header;