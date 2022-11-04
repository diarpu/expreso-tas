import Section from 'components/Layouts/Section'
import SectionContainer from 'components/Layouts/SectionContainer'
import { useTheme } from 'next-themes'
import Box from 'ui/Box'
import ButtonLink from 'ui/ButtonLink'
import Heading from 'ui/Heading'
import Text from 'ui/Text'

export default function Hero() {
  const { theme, setTheme } = useTheme()

  return (
    <Section
      css={{
        backgroundColor: '$sky1'
      }}
    >
      <SectionContainer
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Heading
          as="h1"
          css={{
            textTransform: 'uppercase',
            fontSize: '$xl',
            '@lg': {
              fontSize: '$2xl'
            },
            textAlign: 'center',
            fontWeight: 800,
            mb: '$3'
          }}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Expreso TAS
        </Heading>
        <Heading
          as="h2"
          css={{
            textAlign: 'center',
            fontSize: '$4xl',
            mb: '$5',
            '@lg': {
              fontSize: '$5xl'
            },
            '@xl': {
              fontSize: '$7xl'
            },
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          Transporte y distribución de encomiendas a larga distancia
        </Heading>
        <Text
          css={{
            fontSize: 18,
            color: '$gray11',
            textAlign: 'center',
            maxWidth: '750px',
            mx: 'auto'
          }}
        >
          Expreso TAS transporta y distribuye encomiendas de larga distancia en
          la provincia de buenos aires y Rosario en 24hs.
        </Text>
        <Box
          css={{
            mt: '$5',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '$5',
            '@md': {
              flexWrap: 'nowrap'
            }
          }}
        >
          <ButtonLink
            href="tel:023924222002"
            target="_blank"
            variant="buttonSolid"
            size="md"
            css={{
              width: '100%',
              textAlign: 'center',
              textTransform: 'capitalize',
              '@md': {
                maxWidth: '250px'
              }
            }}
          >
            Contactar
          </ButtonLink>
          <ButtonLink
            href="#sucursales"
            variant="buttonOutline"
            size="md"
            css={{
              width: '100%',
              textAlign: 'center',
              textTransform: 'capitalize',
              '@md': {
                maxWidth: '250px'
              }
            }}
          >
            Sucursales
          </ButtonLink>
        </Box>
      </SectionContainer>
    </Section>
  )
}
