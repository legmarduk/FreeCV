import React from "react";
import LevelStep from "../../../components/utils/levelStep";

const InformacionLaboral = ({ step, setStep }) => {
  return (
    <>
      <h1>InformacionLaboral</h1>

      <LevelStep step={step} setStep={setStep} />
    </>
  )
}

export default InformacionLaboral;