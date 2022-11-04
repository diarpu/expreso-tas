import Box from 'ui/Box'
import NextNProgress from 'nextjs-progressbar'

export default function MainLayout({ children }) {
  return (
    <>
      <NextNProgress
        color="black"
        startPosition={0.4}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Box as="main">{children}</Box>
    </>
  )
}
