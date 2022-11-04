import { styled } from 'stitches.config'

export default function Box({ children, css, ...props }) {
  return (
    <BoxStyled css={{ ...css }} {...props}>
      {children}
    </BoxStyled>
  )
}

const BoxStyled = styled('div', {})
