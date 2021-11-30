import React from 'react'
import { useForm, useWatch, useFieldArray } from 'react-hook-form'
import { Grid, Button, InputAdornment, IconButton } from '@mui/material'
import Input from '../../components/form/Input'
import CustomDatePicker from '../../components/form/DatePicker'
import InputRut from '../../components/form/InputRut'
import { makeStyles } from '@mui/styles'
import { joiResolver } from '@hookform/resolvers/joi';
import { formularioSchema } from '../../schemas/curriculumSchema'
import CustomGrid from '../../components/utils/customGrid'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const Formulario = () => {

  const classes = useStyles();
  const { register, handleSubmit, control, transform, formState: { errors } } = useForm({
    defaultValues: {
      nombres: "",
      apellido_paterno: "",
      apellido_materno: "",
      rut: "",
      email: "",
      telefono: "",
      descripcion: "",
      fecha_naciminento: "",
      links: {
        linkedin: "",
        git: "",
        web: "",
      },
      estudios: [
        {
          fecha_inicio: "",
          fecha_termino: "",
          institucion: "",
          descripcion: "",
        }
      ],
      laborales: [
        {
          fecha_inicio: "",
          fecha_termino: "",
          empresa: "",
          descripcion: "",
        }
      ]
      // habilidades:[]
    },
    resolver: joiResolver(formularioSchema())
  })

  const { fields: fieldStudios, append: appendStudio, remove: removeStudio } = useFieldArray({
    control,
    name: "estudios"
  });
  const { fields: fieldLaborales, append: appendLaborales, remove: removeLaborales } = useFieldArray({
    control,
    name: "laborales"
  })
  const watchDescription = useWatch({ control, name: "descripcion" })

  console.log("'eliminar despues' errors ",errors)
  const onSubmit = data => {
    console.log("asdasd")
    console.log(data)
  }

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
      <CustomGrid>
        <Button onClick={() => {
          appendStudio({
            fecha_inicio: "",
            fecha_termino: "",
            institucion: "",
            descripcion: "",
          })
        }}>Agregar estudios</Button>
        {fieldStudios.map((estudio, index) =>
          <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6} lg={6}>
                <CustomDatePicker
                  key={`estudio.${index}.inicio`}
                  name={`estudios.${index}.fecha_inicio`}
                  label="fecha inicio"
                  control={control}
                  maxDate={new Date()}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CustomDatePicker
                  key={`estudio.${index}.termino`}
                  name={`estudios.${index}.fecha_termino`}
                  label="fecha termino"
                  control={control}
                  maxDate={new Date()}
                />
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Input
                key={`estudio.${index}.institucion`}
                name={`estudios.${index}.institucion`}
                label="institucion"
                control={control}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Input
              key={`estudio.${index}.descripcon`}
              name={`estudios.${index}.descripcion`}//"telefono"
              label="descripcion"
              type="number"
              control={control}
              multiline={true}
              rows={4}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DescriptionOutlinedIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button onClick={() => { removeStudio(index) }}>
              eliminar
            </Button>
          </>
        )}

      </CustomGrid>

      <CustomGrid>
        <Button onClick={() => {
          appendLaborales({
            fecha_inicio: "",
            fecha_termino: "",
            empresa: "",
            descripcion: "",
          })
        }}>Agregar experiencia laboral</Button>
        {fieldLaborales.map((laboral, index) => (
          <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6} lg={6}>
                <CustomDatePicker
                  key={`laboral.${index}.inicio`}
                  name={`laborales.${index}.fecha_inicio`}
                  label="fecha inicio"
                  control={control}
                  maxDate={new Date()}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CustomDatePicker
                  key={`laborales.${index}.termino`}
                  name={`laborales.${index}.fecha_termino`}
                  label="fecha termino"
                  control={control}
                  maxDate={new Date()}
                />
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Input
                key={`laborales.${index}.empresa`}
                name={`laborales.${index}.empresa`}
                label="empresa"
                control={control}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <WorkOutlineIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Input
              key={`laborales.${index}.descripcon`}
              name={`laborales.${index}.descripcion`}
              label="descripcion"
              type="number"
              control={control}
              multiline={true}
              rows={4}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DescriptionOutlinedIcon />
                  </InputAdornment>
                )
              }}
            />
          </>
        ))}
      </CustomGrid>
      <Button
        onClick={handleSubmit(onSubmit)}
      > crear </Button>
    </Grid >
  )
}

const useStyles = makeStyles({
  inputContainer: {
    marginTop: '10px',
  }
})
export default Formulario;
