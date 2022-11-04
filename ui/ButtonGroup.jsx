import { styled } from 'stitches.config'

export default function ButtonGroup({ children, css, ...props }) {
  return (
    <ButtonGroupStyled css={{ ...css }} {...props}>
      {children}
    </ButtonGroupStyled>
  )
}

const ButtonGroupStyled = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  gap: '$5'
})
