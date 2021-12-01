import React from 'react'
import { Grid, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './header/header';
import Body from './body/body';
import ButtonBody from './body/buttonBody';

const Landing = () =>{
  const classes = useStyles();
  return(
     <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root}>
        <Toolbar>
          <Header />
          <Body />
        </Toolbar>
        <ButtonBody/>
     </Grid>
  )
}
const useStyles = makeStyles({
  root:{
    minHeight:"100vh",
    backgroundColor:"#3484ff",
    borderRadius:"0% 0% 70% 20%",
    
  }
})
export default Landing;