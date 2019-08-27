import React from 'react'

import { InputGroup, Input, Label } from './style'

import InputError from '../input-error'

const FormInput = ({ id, label, value, hasError, errorMessage, ...otherProps }) => (
  <InputGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} value={value} {...otherProps} />
    {errorMessage ? <InputError errorMessage="there is an error" errorFor={id} /> : null}
  </InputGroup>
)

export default FormInput
