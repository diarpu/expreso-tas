import { styled } from 'stitches.config'

export default function Heading({ children, css, ...props }) {
  return (
    <HeadingStyled css={{ ...css }} {...props}>
      {children}
    </HeadingStyled>
  )
}

const HeadingStyled = styled('h2', {
  fontWeight: 800,
  lineHeight: 1.2,
  variants: {
    as: {
      h1: {
        fontSize: '$4xl'
      },
      h2: {
        fontSize: '$3xl',
        '@lg': {
          fontSize: '$4xl'
        }
      },
      h3: {
        fontSize: '$lg'
      }
    }
  }
})
