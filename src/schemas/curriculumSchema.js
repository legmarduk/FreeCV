import Joi, { required } from "joi";

export const formularioSchema = () =>
  Joi.object({
    nombres: Joi.string().min(3).max(35).trim().required().messages({
      'string.base': `nombre debe ser 'texto'`,
      'string.empty': `nombre no debe ser vacio`,
      'string.min': `nombre minimo de caracteres {#limit}`,
      'any.required': `Nombres el campo es requerido`
    }),
    apellido_paterno: Joi.string().min(3).max(35).trim().required().messages({
      'string.base': `apellido paterno debe ser 'texto'`,
      'string.empty': `apellido paterno no debe ser vacio`,
      'string.min': `apellido paterno de caracteres {#limit}`,
      'any.required': `apellido paterno el campo es requerido`
    }),
    apellido_materno: Joi.string().min(3).max(35).trim().required().messages({
      'string.base': `apellido materno debe ser 'texto'`,
      'string.empty': `apellido materno no debe ser vacio`,
      'string.min': `apellido materno minimo de caracteres {#limit}`,
      'any.required': `apellido materno el campo es requerido`
    }),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'cl'] } }).messages({
      'string.base': `email debe ser 'texto'`,
      'string.empty': `email no debe ser vacio`,
      'string.email': `debe ser email `,
      'any.empty': `debe ser email `,
      'any.required': `email el campo es requerido`,
    }),
    telefono: Joi.string().max(9).required().pattern(/^[0-9]{9}$/).messages({
      'string.base': `telefono debe ser 'texto'`,
      'string.empty': `telefono no debe ser vacio`,
      'string.max': `maximo 9 digitos`,
      'string.pattern.base':`solo numeros`,
      'any.required': `email el campo es requerido`,
    }),
    descripcion: Joi.string().max(1000).required().messages({
      'string.base': `descripcion debe ser 'texto'`,
      'string.empty': `descripcion no debe ser vacio`,
      'string.max': `descripcion minimo de caracteres {#limit}`,
      'any.required': `descripcion el campo es requerido`
    }),
    rut: Joi.string().required().min(11).max(12).messages({
      'string.base': `rut debe ser 'texto'`,
      'string.empty': `rut no debe ser vacio`,
      'string.pattern.base':`formato del rut 12.345.678-9 `,
      'any.required': `rut el campo es requerido`,
    }),
    fecha_naciminento: Joi.date().required().messages({
      'date.base':  `fecha debe tener formato valido o distinto de vacio`,
      'date.iso': `error en formato de la fecha`,
      'date.empty': `fecha no debe ser vacio`,
      'date.format':`tu mama`,
      'any.required': `fecha el campo es requerido`,
    }),
    //telefono: Joi.string().required(),
    //links: "",
    //estudios: [],
    //experiencia_laboral: [],
    //habilidades: [],
  });

//export default formularioSchema