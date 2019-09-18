import React from 'react'
import icon from '../../assets/alert.svg'
import { ErrorMessage, ErrorContainer, ErrorIcon } from './style'

export const InputError = ({ errorMessage }) => (
  <ErrorMessage>{errorMessage}</ErrorMessage>
)

export const ErrorBlock = ({ errorMessage }) => (
  <ErrorContainer>
    <ErrorIcon src={icon} />
    {errorMessage}
  </ErrorContainer>
)
