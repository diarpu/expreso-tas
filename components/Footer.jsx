import Section from 'components/Layouts/Section'
import SectionContainer from 'components/Layouts/SectionContainer'
import Box from 'ui/Box'
import ButtonLink from 'ui/ButtonLink'

export default function Footer() {
  return (
    <Section>
      <SectionContainer css={{ py: '$1', textAlign: 'center' }}>
        <ButtonLink
          href="https://gredich.com"
          target="_blank"
          css={{
            display: 'inline-block',
            color: '$blue12',
            fontSize: '$sm'
          }}
        >
          Sitio por{' '}
          <Box
            as="span"
            css={{
              textDecoration: 'underline'
            }}
          >
            Gredich
          </Box>
        </ButtonLink>
      </SectionContainer>
    </Section>
  )
}
