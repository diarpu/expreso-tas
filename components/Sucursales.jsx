import Section from 'components/Layouts/Section'
import SectionContainer from 'components/Layouts/SectionContainer'
import Box from 'ui/Box'
import ButtonLink from 'ui/ButtonLink'
import Heading from 'ui/Heading'
import { FiMapPin } from 'react-icons/fi'

import { BsTelephone } from 'react-icons/bs'

export default function Sucursales() {
  return (
    <Section id="sucursales">
      <SectionContainer>
        <Heading as="h2" css={{ textAlign: 'center' }}>
          Sucursales Expreso TAS
        </Heading>
        <Box
          css={{
            mt: '$10',
            display: 'grid',
            gap: '$6',
            '@md': {
              gridTemplateColumns: 'repeat(2, 1fr)'
            },
            '@lg': {
              gridTemplateColumns: 'repeat(4, 1fr)'
            }
          }}
        >
          {data.map((item) => {
            const { id, ciudad, direccion, telefonos } = item

            return (
              <Box
                key={`why-${id}`}
                css={{
                  p: '$8',
                  border: '1px solid $blue6',
                  rounded: '$lg',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '$3',
                  transition: 'color 0.2s ease-in-out',
                  'a:hover': {
                    color: '$blue11'
                  }
                }}
              >
                <Heading
                  as="h3"
                  css={{
                    color: '$blue12',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}
                >
                  {ciudad}
                </Heading>
                <Box
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '$2'
                  }}
                >
                  <FiMapPin size={19} />
                  <Box as="span">{direccion}</Box>
                </Box>
                {telefonos.map((telefono) => (
                  <ButtonLink
                    href={`tel:${telefono}`}
                    target="_blank"
                    key={telefono}
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '$2'
                    }}
                  >
                    <BsTelephone size={19} />
                    <Box as="span">{telefono}</Box>
                  </ButtonLink>
                ))}
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
    ciudad: 'Ayacucho',
    direccion: 'Murgier N° 2019',
    telefonos: ['02494 507257']
  },
  {
    id: 2,
    ciudad: 'Azul',
    direccion: 'Av. Mitre N° 242',
    telefonos: ['02281 423318', '02281 434769']
  },
  {
    id: 3,
    ciudad: 'Bahía Blanca',
    direccion: 'Don Bosco N°2291',
    telefonos: ['0291 4806191']
  },
  {
    id: 4,
    ciudad: 'Balcarce',
    direccion: 'Calle 20 N° 801',
    telefonos: ['02266 431597', '02266 661244']
  },
  {
    id: 5,
    ciudad: 'Benito Juárez',
    direccion: 'Constitución N° 315',
    telefonos: ['02281 406002']
  },
  {
    id: 6,
    ciudad: 'Bolivar',
    direccion: 'Av. Febres García N° 595',
    telefonos: ['02314 420300']
  },
  {
    id: 7,
    ciudad: 'Chillar',
    direccion: '25 de Mayo N° 861',
    telefonos: ['02281 406002']
  },
  {
    id: 8,
    ciudad: 'Chivilcoy',
    direccion: 'Mathus N° 575',
    telefonos: ['02346 421548']
  },
  {
    id: 9,
    ciudad: 'Coronel Pringles',
    direccion: 'José Hernández N° 1071',
    telefonos: ['02922 465000']
  },
  {
    id: 10,
    ciudad: 'Gral LaMadrid',
    direccion: 'Belgrano N° 915',
    telefonos: ['02923 412982']
  },
  {
    id: 11,
    ciudad: 'Gonzales Chaves',
    direccion: 'Lavalle N° 730',
    telefonos: ['02923 648248']
  },
  {
    id: 12,
    ciudad: 'Junin',
    direccion: 'Avellaneda N° 966',
    telefonos: ['0236 4425690']
  },
  {
    id: 13,
    ciudad: 'La Plata',
    direccion: 'Av. 19 N° 538 e/ 526 y 527',
    telefonos: ['0221 4897345', '0221 4240138']
  },
  {
    id: 14,
    ciudad: 'Mar del Plata',
    direccion: 'Av. Juan B Justo N° 3953',
    telefonos: ['0223 4731793', '0223 4724387']
  },
  {
    id: 15,
    ciudad: 'Necochea',
    direccion: 'Calle 72 N° 2772',
    telefonos: ['02262 525252', '02262 523939']
  },
  {
    id: 16,
    ciudad: 'Olavarría',
    direccion: 'Pelegrino N° 1869',
    telefonos: ['02284 421247']
  },
  {
    id: 17,
    ciudad: 'Pehuajó',
    direccion: 'Mitre N° 105',
    telefonos: ['02396 479784']
  },
  {
    id: 18,
    ciudad: 'Pigue',
    direccion: 'Pueyredón N° 30',
    telefonos: ['02923 474324']
  },
  {
    id: 19,
    ciudad: 'Saladillo',
    direccion: 'Leando Alem N° 3051',
    telefonos: ['02344 453714']
  },
  {
    id: 20,
    ciudad: 'Tandil',
    direccion: 'Colectora Pugliese N° 98',
    telefonos: ['02494 428353', '02494 438775']
  },
  {
    id: 21,
    ciudad: 'Trenque Lauquen',
    direccion: 'García Salinas N° 2154',
    telefonos: ['02392 4222002']
  },
  {
    id: 22,
    ciudad: 'Tres Arroyos',
    direccion: 'Av. José Ingenieros N° 936',
    telefonos: ['02983 423983', '02983 424154']
  }
]
