import Section from 'components/Layouts/Section'
import SectionContainer from 'components/Layouts/SectionContainer'
import Box from 'ui/Box'
import Heading from 'ui/Heading'
import Text from 'ui/Text'

export default function Services() {
  return (
    <Section>
      <SectionContainer>
        <Heading
          as="h2"
          css={{
            textAlign: 'center',
            mb: '$6'
          }}
        >
          Nuestros Servicios
        </Heading>
        <Box
          css={{
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
          {data.map((item) => {
            const { id, title, description } = item
            return (
              <Box
                key={`services-${id}`}
                css={{
                  p: '$8',
                  border: '1px solid $blue6',
                  rounded: '$lg',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '$2'
                }}
              >
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
                    fontSize: 15,
                    color: 'inherit'
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
    title: 'Transportes de Cargas',
    description:
      'Transportamos encomiendas a toda la provincia de Buenos Aires, Rosario y al resto del País por redespacho'
  },
  {
    id: 2,
    title: 'Recepción y Clasificación de Cargas',
    description:
      'En Expreso TAS almacenamos y clasificamos con mucho cuidado cada carga para que esta llegue en perfecto estado a su destino'
  },
  {
    id: 3,
    title: 'Cobranzas',
    description:
      'Facilitamos a nuestros clientes el servicio de cobranzas en toda la provincia de Buenos Aires'
  },
  {
    id: 4,
    title: 'Trámites en General',
    description:
      'Expreso TAS cuenta con personal experto para realizar diversos trámites como compra de productos, efecturar pagos, etc'
  },
  {
    id: 5,
    title: 'Distribución y Retiros Domiciliarios',
    description:
      'Contamos con el personal capacitado que se encarga de los traslados puerta a puerta'
  },
  {
    id: 6,
    title: 'Gestión de Contrareembolsos',
    description:
      'Puedes realizar envíos contraeembolso de sus objetos a través de Expreso TAS'
  },
  {
    id: 7,
    title: 'Servicio de Mudanzas',
    description:
      'Transportamos tus bienes con total seguridad a corta o larga distancia'
  },
  {
    id: 8,
    title: 'Redespachos',
    description:
      'Expreso TAS va desde Buenos Aires al Norte, desde Bahía blanca hasta el Sur y desde Treque Lauquen hacia el oeste del País'
  }
]
