import React from 'react'
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form'

const Input = ({ name, control, label, type, ...otros }) => {
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
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          {...otros}
        />
      )}
    />
  )
}

export default Input;