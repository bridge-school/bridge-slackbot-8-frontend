import styled from 'styled-components'

export const ErrorMessage = styled.span.attrs({
  className: `f4  mt2 dark-red`,
})`
  ::before {
    content: '❌';
    margin-right: 3px;
  }
`
