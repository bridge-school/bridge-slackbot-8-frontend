import React from 'react'
import { ErrorMessage } from './style'

const InputError = ({ errorMessage, errorFor }) => (
  <ErrorMessage id={`${errorFor}-error`}>{errorMessage}</ErrorMessage>
)

export default InputError
