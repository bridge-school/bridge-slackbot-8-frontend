import React from 'react'
import { Button } from './style'

const FormButton = ({ label, ...otherProps }) => <Button {...otherProps}>{label}</Button>

export default FormButton
