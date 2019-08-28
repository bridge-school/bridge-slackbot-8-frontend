import React from 'react'
import { Button } from './style'

const FormButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default FormButton
