import React from "react";
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TypewriterComponent from "typewriter-effect";

const Body =()=>{
  const classes = useStyles();

  return(
    <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.body}>
      <TypewriterComponent 
        onInit={ (typewriter) => {
          typewriter.typeString(`<h1> ¿Necesitas un CV?</h1>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<h1>Crea tu CV Gratis</h1>`)
          .pauseFor(2500)
          .deleteAll()
          .start();
        }}
        options={{
          autoStart:true,
          loop:true,
          cursor:""
        }}
      />
    </Grid>
  )
}

const useStyles = makeStyles({
  body:{
    fontSize: "3rem",
    fontWeight: "400px",
    color:"#fff",
    minHeight:"300px",
    width:"90%"
    
  }
})

export default Body;