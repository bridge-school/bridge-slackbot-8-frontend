import styled from 'styled-components'

export const ErrorMessage = styled.span.attrs({
  className: `f4 mt1 dark-red mb3 db flex justify-start items-center`
})`
  ::before {
    content: '❌';
    margin-right: 5px;
    padding-top: 2px;
    font-size: 10px;
  }
`

export const MessageContainer = styled.div.attrs(props => {
  const { type } = props
  const background = type === 'error' ? '#fff0f0' : '#e2fff4'
  const borderColor = type === 'error' ? '#ffcece' : '#7dd2b2'

  return {
    style: { background, borderColor },
    className: `w-100 mb4 pa3 br2 ba bw1 f4 flex flex-column justify-center items-center ${
      props.type === 'error' ? 'dark-red' : 'green'
    }`
  }
})``

export const MessageIcon = styled.img.attrs({
  className: `mb2`
})`
  height: 25px;
  width: auto;
`
