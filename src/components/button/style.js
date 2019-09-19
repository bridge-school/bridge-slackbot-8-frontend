import styled from 'styled-components'

export const Button = styled.button.attrs(props => ({
  className: `f4 fw6 mt2 pv2 bn br2 w-30 white bg-animate bg-green button-reset ${
    props.disabled ? '' : 'hover-bg-black'
  }`
}))`
  &:disabled {
    opacity: 0.7;
  }
`
