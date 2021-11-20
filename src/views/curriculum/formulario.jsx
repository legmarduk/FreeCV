import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { Grid, Button } from '@mui/material'
import Input from '../../components/form/Input'
import CustomDatePicker from '../../components/form/DatePicker'
import InputRut from '../../components/form/InputRut'
import { makeStyles } from '@mui/styles'
import { joiResolver } from '@hookform/resolvers/joi';
import { formularioSchema } from '../../schemas/curriculumSchema'
import CustomGrid from '../../components/utils/customGrid'

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
    },
    resolver: joiResolver(formularioSchema())
  })

  const onSubmit = data => {
    console.log("asdasd")
    console.log(data)
  }

  return (
    <Grid container direction="column">
      <form>
        <CustomGrid>
          <Input
            name="nombres"
            label="Nombres"
            control={control}
          />
        </CustomGrid>
        <CustomGrid>
          <Input
            name="nombres"
            label="Nombres"
            control={control}
          />
        </CustomGrid>
        <CustomGrid>
          <Input
            name="apellido_paterno"
            label="Apellido paterno"
            control={control}
          />
        </CustomGrid>
        <CustomGrid>
          <Input
            name="apellido_materno"
            label="Apellido materno"
            control={control}
          />
        </CustomGrid>
        <CustomGrid>
          <InputRut
            name="rut"
            label="rut"
            type=""
            control={control}
          />
        </CustomGrid>
        <CustomGrid>
          <Input
            name="email"
            label="email"
            type="email"
            control={control}
          />
        </CustomGrid>
        <CustomGrid>
          <Input
            name="telefono"
            label="telefono"
            type="number"
            control={control}
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
        </CustomGrid>
        <CustomGrid>
          <CustomDatePicker
            name="fecha_naciminento"
            label="fecha naciminento"
            control={control}
            maxDate={new Date()}
          />
        </CustomGrid>
        <CustomGrid></CustomGrid>
        <Button
          onClick={handleSubmit(onSubmit)}
        > crear </Button>
      </form>
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
      apellido_paterno: "", //x
      apellido_materno: "", //x
      fecha_naciminento: "",
      rut: "",
      correo: "",
      telefono: "",
      links: "",
      descripcion: "",
      estudios: [],
      experiencia_laboral: [],
      habilidades: [],
 */