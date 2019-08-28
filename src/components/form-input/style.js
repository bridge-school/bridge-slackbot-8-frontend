import styled from 'styled-components'

export const InputGroup = styled.div.attrs({
  className: `mb4`,
})``

export const Input = styled.input.attrs(props => ({
  className: `input-reset ba br2 bw1  pa2 mb2 db w-100 f4 ${
    props.hasError ? 'b--dark-red' : 'b--black-20'
  }`,
}))``

export const Label = styled.label.attrs({
<<<<<<< HEAD
  className: `f4 b db mb2 mid-gray`,
=======
  className: `f4 b db mb2`,
>>>>>>> 6475ddb8115f598ccc2708b2ea677e85251a5434
})``
