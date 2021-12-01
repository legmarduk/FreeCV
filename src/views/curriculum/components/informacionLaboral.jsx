import React from "react";
import { Button,Grid,InputAdornment } from "@mui/material";
import Input from '../../../components/form/Input'
import CustomDatePicker from '../../../components/form/DatePicker'
import CustomGrid from '../../../components/utils/customGrid'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const InformacionLaboral=({control,appendLaborales,fieldLaborales,removeLaborales})=>{
  return(
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
             <Button onClick={() => { removeLaborales(index) }}>
              eliminar
            </Button>
          </>
        ))}
      </CustomGrid>

  )
}

export default InformacionLaboral;