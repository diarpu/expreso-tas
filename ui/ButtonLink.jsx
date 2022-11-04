import { styled } from 'stitches.config'

export default function ButtonLink({ children, css, ...props }) {
  return (
    <ButtonLinkStyled css={{ ...css }} {...props}>
      {children}
    </ButtonLinkStyled>
  )
}

const ButtonLinkStyled = styled('a', {
  display: 'inline-block',
  variants: {
    variant: {
      buttonSolid: {
        backgroundColor: '$blue9',
        color: 'white',
        fontWeight: 500,
        textTransform: 'uppercase',
        border: '2px transparent solid',
        rounded: '$lg'
      },
      buttonOutline: {
        backgroundColor: 'transparent',
        color: '$blue12',
        fontWeight: 500,
        textTransform: 'uppercase',
        border: '2px solid',
        borderColor: '$blue7',
        rounded: '$lg'
      }
    },
    size: {
      sm: {
        fontSize: 14,
        px: '$4',
        py: '$2'
      },
      md: {
        fontSize: 16,
        px: '$7',
        py: '$3'
      }
    }
  }
})
