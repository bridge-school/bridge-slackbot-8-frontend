import styled from 'styled-components'

export const ErrorMessage = styled.span.attrs({
  className: `f4 mt2 dark-red mb4 db flex justify-start items-center`
})`
  ::before {
    content: '❌';
    margin-right: 5px;
    padding-top: 2px;
    font-size: 10px;
  }
`

export const ErrorContainer = styled.div.attrs({
  className: `w-100 mb4 pa2 br2 ba bw1 f4 dark-red flex flex-column justify-center items-center`
})`
  border-color: #ffcece;
  background-color: #fff0f0;
`

export const ErrorIcon = styled.img.attrs({
  className: `mb2`
})`
  height: 25px;
  width: auto;
`
