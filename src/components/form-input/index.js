import React from 'react'

import { InputGroup, Input, Label } from './style'

import InputError from '../input-error'

<<<<<<< HEAD
const FormInput = ({ id, label, hasError, errorMessage, ...otherProps }) => (
  <InputGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...otherProps} />
    {errorMessage ? <InputError errorMessage={errorMessage} errorFor={id} /> : null}
=======
const FormInput = ({ id, label, value, hasError, errorMessage, ...otherProps }) => (
  <InputGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} value={value} {...otherProps} />
    {errorMessage ? <InputError errorMessage="there is an error" errorFor={id} /> : null}
>>>>>>> 6475ddb8115f598ccc2708b2ea677e85251a5434
  </InputGroup>
)

export default FormInput
