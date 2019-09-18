import React from 'react'
import { ErrorMessage } from './style'

export const InputError = ({ errorMessage }) => (
  <ErrorMessage>{errorMessage}</ErrorMessage>
)

export const ErrorBlock = ({ errorMessage }) => <>{errorMessage}</>
