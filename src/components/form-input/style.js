import styled from 'styled-components'

export const Input = styled.input.attrs(({ hasError }) => ({
  className: `input-reset ba br2 bw1 pa2 mb3 db w-100 f4 border-box ${
    hasError ? 'b--dark-red' : 'b--black-20'
  }`
}))``

export const Label = styled.label.attrs({
  className: `f3 b db mb2 mid-gray`
})``
