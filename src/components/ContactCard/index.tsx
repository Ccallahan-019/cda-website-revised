'use client'

import { Contact } from '@/payload-types'

import { Box, Flex, Inset } from '@radix-ui/themes'
import { Card } from '../UI/RadixComponents/Card'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Heading } from '../UI/RadixComponents/Typography/Heading'
import { MinusIcon } from 'lucide-react'

export const ContactCard: React.FC<{ contact: Contact }> = (props) => {
  const { name, roles, email } = props.contact

  return (
    <Card size="3">
      <Flex height="100%" direction="column" gap="3">
        <Flex direction="column" gap="1" flexGrow="1">
          <Heading as="h5">{name}</Heading>

          <Flex direction="column" asChild>
            <ul>
              {roles.map((role, index) => (
                <li key={role.id || index}>
                  <Text>
                    <Flex as="span" gap="2" align="baseline">
                      <MinusIcon size={12} style={{ flexShrink: 0 }} />
                      {role.role}
                    </Flex>
                  </Text>
                </li>
              ))}
            </ul>
          </Flex>
        </Flex>

        {email && (
          <Inset side="bottom" style={{ backgroundColor: 'var(--yellow-6)' }}>
            <Box style={{ borderTop: 'solid 1px var(--gray-8)' }}>
              <Flex px="2" py="3" align="center" justify="center">
                <Text size="1" style={{ letterSpacing: '0.05rem', textTransform: 'uppercase' }}>
                  {email}
                </Text>
              </Flex>
            </Box>
          </Inset>
        )}
      </Flex>
    </Card>
  )
}
