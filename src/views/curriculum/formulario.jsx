import React from 'react'
import { useForm, useWatch,useFieldArray } from 'react-hook-form'
import { Grid, Button, InputAdornment, IconButton } from '@mui/material'
import Input from '../../components/form/Input'
import CustomDatePicker from '../../components/form/DatePicker'
import InputRut from '../../components/form/InputRut'
import { makeStyles } from '@mui/styles'
import { joiResolver } from '@hookform/resolvers/joi';
import { formularioSchema } from '../../schemas/curriculumSchema'
import CustomGrid from '../../components/utils/customGrid'


import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
      fecha_naciminento:"",
      links: {
        linkedin: "",
        git: "",
      },
      // estudios:[
      //   {
      //     fecha_inicio:"",
      //     fecha_ternino:"",
      //     detalle:"",
      //   }
      // ]

    },
    resolver: joiResolver(formularioSchema())
  })
 
  
  const watchDescription = useWatch({ control, name: "descripcion" })

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
        <CustomGrid></CustomGrid>
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


/**
 * nombres: "", //x
      apellido_paterno: "", // /
      apellido_materno: "", // /
      fecha_naciminento: "",   /
      rut: "",                /
      correo: "",             /
      telefono: "",           /
      links: "",
      descripcion: "",
      estudios: [],
      experiencia_laboral: [],
      habilidades: [],
 */

      /**
       * 
       *  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "telefonos", // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });
       * 
       * <CustomGrid>
          <Button onClick={()=>{append({telefono:""})}}> asdasd</Button>
          {fields.map((telefono,index) =>
            <Input
            key={`telefono.${index}`}
            name={`telefonos.${index}.telefono`}//"telefono"
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
          )}
          
        </CustomGrid>
       */