import React from "react";
import LevelStep from "../../../components/utils/levelStep";


const InformacionPersonal = ({ step, setStep }) => {
  return (
    <>
      <h1>InformacionPersonal</h1>

      <LevelStep step={step} setStep={setStep} />
    </>
  )
}


export default InformacionPersonal;