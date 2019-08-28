import React from 'react'

import { InputGroup, Input, Label } from './style'

import InputError from '../input-error'

const FormInput = ({ id, label, hasError, errorMessage, ...otherProps }) => (
  <InputGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...otherProps} />
    {errorMessage ? <InputError errorMessage={errorMessage} errorFor={id} /> : null}
  </InputGroup>
)

export default FormInput
