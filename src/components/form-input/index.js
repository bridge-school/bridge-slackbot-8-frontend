import React from 'react'
import InputError from '../input-error'
import { InputGroup, Input, Label } from './style'

const FormInput = ({ id, label, hasError, errorMessage, ...props }) => (
  <InputGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} />
    {errorMessage && <InputError errorMessage={errorMessage} errorFor={id} />}
  </InputGroup>
)

export default FormInput
