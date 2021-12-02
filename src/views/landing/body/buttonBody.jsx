import React from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate } from "react-router";
const ButtonBody = () => {
  const classes = useStyles()
  let navegate = useNavigate();
  return(
    <Grid container direction="row" justifyContent="center" alignItems="center" >
        <Button 
            className={classes.button} 
            style={{backgroundColor:"red",color:"#fff",borderRadius:"20px"}}
            onClick={()=>{navegate('/curriculum')}}
          >
          Crear <FeedIcon style={{marginLeft:"8px"}} />
        </Button>
    </Grid>
  )
}
const useStyles = makeStyles({
  button:{
    width:"20%",
  }
})

export default ButtonBody;