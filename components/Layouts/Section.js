import Box from 'ui/Box'

export default function Section({ children, css, ...props }) {
  return (
    <Box
      as="section"
      css={{
        ...css
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
