import React, { useState } from "react";
import { Step, StepLabel, Stepper, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles'
import InformacionPersonal from "./steps/informacionPersonal";
import InformacionLaboral from "./steps/informacionLaboral";
import InformacionEducacion from "./steps/informacionEducacion";
import Habilidades from "./steps/habilidades";

const stepsLabel = ["Información personal", "Información de educación", "Información laboral", "Habilidades"];

const handleSteps = (step,setStep) => {
  switch (step) {
    case 0: return <InformacionPersonal setStep={setStep} step={step}/>
    case 1: return <InformacionEducacion setStep={setStep} step={step}/>
    case 2: return <InformacionLaboral setStep={setStep} step={step} />
    case 3: return <Habilidades setStep={setStep} step={step}/>
    default: return
  }
}

const CustomStepper = () => {

  const classes = useStyles();
  const [step, setStep] = useState(0)

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.grid}>
        <Stepper activeStep={step} alternativeLabel style={{ width: "90%" }}>
          {stepsLabel.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">{handleSteps(step,setStep)}</Grid>
    </>
  )
}  


const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
    width: "100%",
  },
  formComponent: {
    marginTop: "50px",
    backgroundColor: "red",
    //width: "90%"
  }
})

export default CustomStepper;