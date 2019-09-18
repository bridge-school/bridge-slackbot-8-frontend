import styled from 'styled-components'

export const Label = styled.label.attrs({
  className: `f4 b db mb2 mid-gray`
})`
  ::after {
    content: '▼';
    display: block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #ccc;
  }
`

export const Select = styled.div.attrs({
  className: `relative`
})``

export const OptionList = styled.select.attrs({
  className: `ba br2 bw1 pa2 mb3 db w-100 f4 b--black-20 input-reset`
})``

export const Option = styled.option.attrs({
  className: ``
})``
