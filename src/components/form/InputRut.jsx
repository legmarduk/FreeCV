import React from 'react'
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { format } from 'rut.js'

const InputRut = ({ name, control, label, type, transform, ...otros }) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <TextField
          id={name}
          label={label}
          fullWidth
          margin="dense"
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
          value={format(value)}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          {...otros}
        />
      )
      }
    />
  )
}

export default InputRut;

