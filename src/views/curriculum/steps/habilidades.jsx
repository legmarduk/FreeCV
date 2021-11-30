import React from "react";
import LevelStep from "../../../components/utils/levelStep";

const Habilidades = ({ step, setStep }) => {
  return (
    <>
      <h1>Habilidades</h1>
      <LevelStep step={step} setStep={setStep} />
    </>
  )
}


export default Habilidades;