import Joi, { required } from "joi";

export const formularioSchema = () => Joi.object({
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
    'string.pattern.base': `solo numeros`,
    'any.required': `email el campo es requerido`,
  }),
  descripcion: Joi.string().max(2000).required().messages({
    'string.base': `descripcion debe ser 'texto'`,
    'string.empty': `descripcion no debe ser vacio`,
    'string.max': `descripcion maximo de caracteres {#limit}`,
    'any.required': `descripcion el campo es requerido`
  }),
  rut: Joi.string().required().min(11).max(12).messages({
    'string.base': `rut debe ser 'texto'`,
    'string.empty': `rut no debe ser vacio`,
    'string.pattern.base': `formato del rut 12.345.678-9 `,
    'any.required': `rut el campo es requerido`,
  }),
  fecha_naciminento: Joi.date().required().messages({
    'date.base': `fecha debe tener formato valido o distinto de vacio`,
    'date.iso': `error en formato de la fecha`,
    'date.empty': `fecha no debe ser vacio`,
    'date.format': `formato incorrecto`,
    'any.required': `fecha el campo es requerido`,
  }),
  links: Joi.object().keys({
    linkedin: Joi.string().optional().allow(""),
    git: Joi.string().optional().allow(""),
    web: Joi.string().optional().allow(""),
  }).optional(),
  estudios: Joi.array().items(Joi.object().keys({
    fecha_inicio: Joi.date().required().messages({
      'date.base': `fecha debe tener formato valido o distinto de vacio`,
      'any.required': `fecha el campo es requerido`
    }),
    fecha_termino: Joi.date().greater(Joi.ref('fecha_inicio')).optional().allow(""),
    descripcion: Joi.string().max(2000).required().messages({
      'string.base': `descripcion de estudio debe ser 'texto'`,
      'string.empty': `descripcion de estudio no debe ser vacio`,
      'string.max': `descripcion de estudio maximo de caracteres {#limit}`,
      'any.required': `descripcion de estudio el campo es requerido`
    }),
    institucion: Joi.string().max(100).required().messages({
      'string.base': `institucion de estudio debe ser 'texto'`,
      'string.empty': `institucion de estudio no debe ser vacio`,
      'string.max': `institucion de estudio maximo de caracteres {#limit}`,
      'any.required': `institucion de estudio el campo es requerido`
    }),
  })),
  laborales: Joi.array().items(Joi.object().keys({
    fecha_inicio: Joi.date().required().messages({
      'date.base': `fecha debe tener formato valido o distinto de vacio`,
      'any.required': `fecha el campo es requerido`
    }),
    fecha_termino: Joi.date().greater(Joi.ref('fecha_inicio')).optional().allow(""),
    empresa: Joi.string().max(100).required().messages({
      'string.base': `empresa debe ser 'texto'`,
      'string.empty': `empresa no debe ser vacio`,
      'string.max': `empresa maximo de caracteres {#limit}`,
      'any.required': `empresa es campo es requerido`
    }),
    descripcion: Joi.string().max(100).required().messages({
      'string.base': `descripcion de trabajo debe ser 'texto'`,
      'string.empty': `descripcion de trabajo no debe ser vacio`,
      'string.max': `descripcion de trabajo minimo de caracteres {#limit}`,
      'any.required': `descripcion de trabajo el campo es requerido`
    }),
  }))

});
//habilidades: [],