import Section from 'components/Layouts/Section'
import SectionContainer from 'components/Layouts/SectionContainer'
import { AiOutlineCar, AiOutlineExperiment } from 'react-icons/ai'
import { BsStopwatch } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineTrackChanges } from 'react-icons/md'
import Box from 'ui/Box'
import Heading from 'ui/Heading'
import Text from 'ui/Text'

export default function Why() {
  return (
    <Section>
      <SectionContainer>
        <Heading
          as="h2"
          css={{
            mb: '$3',
            textAlign: 'center'
          }}
        >
          ¿Por qué Expreso TAS?
        </Heading>
        <Text
          css={{
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          En Expreso TAS trabajamos con responsabilidad para brindar a nuestros
          clientes el mejor servicio de transporte puerta a puerta.
        </Text>
        <Box
          css={{
            mt: '$10',
            display: 'grid',
            gap: '$6',
            '@md': {
              gridTemplateColumns: 'repeat(2, 1fr)'
            },
            '@lg': {
              gridTemplateColumns: 'repeat(3, 1fr)'
            }
          }}
        >
          {data.map((item, index) => {
            const { id, icon, title, description } = item
            return (
              <Box
                key={`why-${id}`}
                css={{
                  p: '$8',
                  border: '1px solid $blue6',
                  rounded: '$lg',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$2'
                }}
              >
                {icon && (
                  <Box as="span" css={{ mb: '$2' }}>
                    {icon}
                  </Box>
                )}
                <Heading
                  as="h3"
                  css={{
                    color: '$blue12'
                  }}
                >
                  {title}
                </Heading>
                <Text
                  css={{
                    fontSize: 15
                  }}
                >
                  {description}
                </Text>
              </Box>
            )
          })}
        </Box>
      </SectionContainer>
    </Section>
  )
}

const data = [
  {
    id: 1,
    icon: <MdOutlineTrackChanges size={38} color="var(--colors-blue12)" />,
    title: 'Rastreo',
    description:
      'Control Satelital y rastreo en el seguimiento de tus encomiendas.'
  },
  {
    id: 2,
    icon: <FiMapPin size={38} color="var(--colors-blue12)" />,
    title: 'Cobertura',
    description: 'Despachos, transporte de cargas a toda la argentina'
  },
  {
    id: 3,
    icon: <AiOutlineExperiment size={38} color="var(--colors-blue12)" />,
    title: 'Experiencia',
    description:
      'Más de 40 años de experiencia en traslados, acarreos y mudanzas'
  },
  {
    id: 4,
    icon: <AiOutlineCar size={38} color="var(--colors-blue12)" />,
    title: 'Flota',
    description:
      'Flota de Vehiculos modernos para responder a todas tus necesidades'
  },
  {
    id: 5,
    icon: <BsStopwatch size={38} color="var(--colors-blue12)" />,
    title: 'Las 24hs',
    description:
      'Servicio de transporte puerta a puerta, entregas y retiros a domicilio'
  }
]
