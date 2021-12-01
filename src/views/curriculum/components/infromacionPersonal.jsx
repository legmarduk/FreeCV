import React from 'react';
import { Grid, InputAdornment } from '@mui/material';
import CustomDatePicker from '../../../components/form/DatePicker'
import InputRut from '../../../components/form/InputRut'
import CustomGrid from '../../../components/utils/customGrid'
import Input from '../../../components/form/Input'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const InformacionPersonal = ({ watchDescription, control }) => {
  return (
    <Grid container direction="column">
      <CustomGrid>
        <Input
          name="nombres"
          label="Nombres"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
      <CustomGrid>
        <Input
          name="apellido_paterno"
          label="Apellido paterno"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
      <CustomGrid>
        <Input
          name="apellido_materno"
          label="Apellido materno"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
      <CustomGrid>
        <InputRut
          name="rut"
          label="rut"
          type=""
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <CreditCardOutlinedIcon />
              </InputAdornment>
            )
          }}

        />
      </CustomGrid>
      <CustomGrid>
        <Input
          name="email"
          label="email"
          type="email"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
      <CustomGrid>
        <Input
          name="telefono"
          label="telefono"
          type="number"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            )
          }}
        />

      </CustomGrid>

      <CustomGrid>
        <Input
          name="descripcion"
          label="descripcion"
          type="text"
          multiline={true}
          rows={4}
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <DescriptionOutlinedIcon />
              </InputAdornment>
            )
          }}
        />

        <Grid
          container
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
        >
          <small> Tienes {2000 - watchDescription.length} caracteres</small>
        </Grid>

      </CustomGrid>
      <CustomGrid>
        <CustomDatePicker
          name="fecha_naciminento"
          label="fecha naciminento"
          control={control}
          maxDate={new Date()}
        />
      </CustomGrid>
      <CustomGrid >
        <Input
          name="links.linkedin"
          label="linkedin"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
      <CustomGrid >
        <Input
          name="links.git"
          label="git"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <GitHubIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
      <CustomGrid >
        <Input
          name="links.web"
          label="Web"
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <LanguageIcon />
              </InputAdornment>
            )
          }}
        />
      </CustomGrid>
    </Grid>
  )
}

export default InformacionPersonal;