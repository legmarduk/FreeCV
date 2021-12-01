import React, { useState } from "react";
import { Typography, Accordion, AccordionSummary, AccordionDetails, Grid, button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import { useForm, useWatch, useFieldArray } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import { formularioSchema } from '../../schemas/curriculumSchema'
import CustomGrid from "../../components/utils/customGrid";

import InformacionPersonal from "./components/infromacionPersonal";
import InformacionEstudios from "./components/informacionEstudios";
import InformacionLaboral from "./components/informacionLaboral";

const CurriculumForm = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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

  console.log("'eliminar despues' errors ", errors)

  const onSubmit = data => {
    console.log("asdasd")
    console.log(data)
  }

  return (
    <Grid className={classes.root}>
      <CustomGrid lg={10}>
        <Grid style={{ marginTop: "40px" }} >
          <Accordion
            expanded={expanded === 'panelInformacionPersonal'}
            onChange={handleChange('panelInformacionPersonal')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#3484ff" }} />}
              id="panelInformacionPersonal"
            >
              <Typography align="center" variant="h5" sx={{ width: '100%', flexShrink: 0, color: "#3484ff" }}>
                informacion Personal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <InformacionPersonal
                watchDescription={watchDescription}
                control={control}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panelInformacionEstudio'}
            onChange={handleChange('panelInformacionEstudio')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#3484ff" }} />}
              id="panelInformacionEstudio"
            >
              <Typography align="center" variant="h5" sx={{ width: '100%', flexShrink: 0, color: "#3484ff" }}>
                informacion Estudio
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <InformacionEstudios
                control={control}
                appendStudio={appendStudio}
                fieldStudios={fieldStudios}
                removeStudio={removeStudio}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panelInformacionLaboral'}
            onChange={handleChange('panelInformacionLaboral')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#3484ff" }} />}
              id="panelInformacionLaboral"
            >
              <Typography align="center" variant="h5" sx={{ width: '100%', flexShrink: 0, color: "#3484ff" }}>
                informacion Laboral
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <InformacionLaboral
                control={control}
                appendLaborales={appendLaborales}
                fieldLaborales={fieldLaborales}
                removeLaborales={removeLaborales}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panelInformacionHabilidades'}
            onChange={handleChange('panelInformacionHabilidades')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#3484ff" }} />}
              id="panelInformacion Habilidades"
            >
              <Typography align="center" variant="h5" sx={{ width: '100%', flexShrink: 0, color: "#3484ff" }}>
                informacion Habilidades
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              aqui va la infromacion  Habilidades
            </AccordionDetails>
          </Accordion>
        </Grid>
      </CustomGrid>
    </Grid>
  )
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#3484ff",
    borderRadius: "0% 0% 70% 20%",

  }
})
export default CurriculumForm;