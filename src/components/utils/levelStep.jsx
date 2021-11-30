import React from "react";
import { Button, Grid } from "@mui/material";

const LevelStep = ({ step, setStep }) => {

  return (
    <Grid>
      <Button
        disabled={step === 0}
        onClick={() => setStep(step - 1)}
      >atras</Button>
      <Button onClick={() => setStep(step + 1)}>
        {step===3?"Generar CV":"adelante"}</Button>
    </Grid>

  )

}

export default LevelStep;