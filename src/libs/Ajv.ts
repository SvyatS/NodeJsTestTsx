import Ajv from 'ajv';

const ajv = new Ajv({ 
  allErrors: true,
  strict: true,
  coerceTypes: false
});

export { ajv };