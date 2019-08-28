import styled from 'styled-components'

export const InputGroup = styled.div.attrs({
  className: `mb4 mr3`
})``

export const Input = styled.input.attrs(props => ({
  className: `input-reset ba br2 bw1  pa2 mb2 db w-100 f4 ${
    props.hasError ? 'b--dark-red' : 'b--black-20'
  }`
}))``

export const Label = styled.label.attrs({
  className: `f4 b db mb2 mid-gray`
})``
