import RichText from '@/components/RichText'
import type { Contact, ContactCardsBlock as ContactCardsBlockProps } from '@/payload-types'
import { ContactCard } from '@/components/ContactCard'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_CHAIRMEN, GET_OFFICERS } from '@/graphql/queries/blocks/contactCards'

export const ContactCardsBlock: React.FC<ContactCardsBlockProps> = async (props) => {
  const {
    richText,
    autoPopulate,
    contactPosition,
    diocese,
    officerType,
    contacts: customContacts,
  } = props

  let contacts: (number | Contact)[] = []

  if (autoPopulate) {
    const client = getApolloServerClient()

    switch (contactPosition) {
      case 'chairman':
        const { data: chairmenData } = await client.query({
          query: GET_CHAIRMEN,
        })

        const chairmen = chairmenData.Contacts.docs
        if (Array.isArray(chairmen) && chairmen.length > 0) {
          contacts = chairmen
        }
        break

      case 'officer':
        const { data: officerData } = await client.query({
          query: GET_OFFICERS,
          variables: { officerType: officerType },
        })

        const officers = officerData.Contacts.docs
        if (Array.isArray(officers) && officers.length > 0) {
          contacts = officers
        }
        break

      case 'deputy':
        if (diocese && typeof diocese === 'object') {
          const { deputies } = diocese
          if (deputies) {
            contacts = deputies
          }
        }
        break
    }
  } else {
    if (customContacts) {
      contacts = customContacts
    }
  }

  return (
    <Container>
      <Flex direction="column" gap="8">
        <Box maxWidth="48rem" mx="auto" style={{ textAlign: 'center' }}>
          {richText && <RichText data={richText} />}
        </Box>

        <Grid gap={{ initial: '4', sm: '6' }} columns="12">
          {contacts &&
            contacts.length > 0 &&
            contacts.map((contact, index) => {
              if (typeof contact === 'object') {
                return (
                  <Flex
                    key={contact.id || index}
                    direction="column"
                    gridColumn={{ initial: 'span 12', sm: 'span 6', lg: 'span 4' }}
                  >
                    <ContactCard contact={contact} />
                  </Flex>
                )
              }
            })}
        </Grid>
      </Flex>
    </Container>
  )
}
