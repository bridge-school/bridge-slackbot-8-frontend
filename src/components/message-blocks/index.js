import React from 'react'
import errorIcon from '../../assets/images/icons/alert.svg'
import successIcon from '../../assets/images/icons/success.svg'
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
