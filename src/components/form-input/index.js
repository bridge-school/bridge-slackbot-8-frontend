import React from 'react'

import { Input, Label } from './style'

const FormInput = ({ id, label, ...props }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} />
  </>
)

export default FormInput
