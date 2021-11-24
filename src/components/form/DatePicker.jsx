import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import es from "date-fns/locale/es";
import { format } from "date-fns";
const DATE_FORM = 'dd-MM-yyyy';

const CustomDatePicker = ({ name, label, control, ...otros }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
          <DatePicker
            id={name}
            label={label}
            value={value}
            //value={value =>{format(value,"dd/MM/yyyy")}}
            onChange={onChange}
            inputFormat="dd/MM/yyyy"
            {...otros}
            renderInput={(params) =>
              <TextField
                {...params}
                size="small"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            }
          />
        </LocalizationProvider>
      )}
    />
  )
}

export default CustomDatePicker;


/**
 *  <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onblur }, fieldState: { error } }) => {
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={label}
            value={value}
            onChange={(newValue) => {
              setValue1(newValue);
              //console.log("new", newValue)
            }}
            //onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      }}
    />
 */