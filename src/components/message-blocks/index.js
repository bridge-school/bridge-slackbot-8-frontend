import React from 'react'
import errorIcon from '../../assets/alert.svg'
import successIcon from '../../assets/success.svg'
import { ErrorMessage, MessageContainer, MessageIcon } from './style'

export const InputError = ({ errorMessage }) => (
  <ErrorMessage>{errorMessage}</ErrorMessage>
)

export const MessageBlock = ({ type, message }) => {
  const icon = type === 'error' ? errorIcon : successIcon

  return (
    <MessageContainer type={type}>
      <MessageIcon src={icon} />
      {message}
    </MessageContainer>
  )
}
