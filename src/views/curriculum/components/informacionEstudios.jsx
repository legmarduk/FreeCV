import React from 'react';
import { Grid, InputAdornment,Button } from '@mui/material';
import Input from '../../../components/form/Input'
import CustomDatePicker from '../../../components/form/DatePicker'
import CustomGrid from '../../../components/utils/customGrid'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SchoolIcon from '@mui/icons-material/School';

const InformacionEstudios=({control,appendStudio,fieldStudios,removeStudio})=>{
  return(
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

  )
}

export default InformacionEstudios;