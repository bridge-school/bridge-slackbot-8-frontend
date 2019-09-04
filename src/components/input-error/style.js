import styled from 'styled-components'

export const ErrorMessage = styled.span.attrs({
  className: `f4  mt2 dark-red mb4 db`
})`
  ::before {
    content: '❌';
    margin-right: 3px;
  }
`
