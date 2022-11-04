import Box from 'ui/Box'

export default function SectionContainer({ children, css }) {
  return (
    <Box
      css={{
        px: '$5',
        py: '$16',
        maxWidth: '1600px',
        mx: 'auto',
        '@md': {
          px: '$10'
        },
        ...css
      }}
    >
      {children}
    </Box>
  )
}
