import { styled } from 'stitches.config'

export default function Text({ children, css, ...props }) {
  return (
    <ParagraphStyled css={{ ...css }} {...props}>
      {children}
    </ParagraphStyled>
  )
}

const ParagraphStyled = styled('p', {
  fontSize: 16,
  color: '$gray11'
})
