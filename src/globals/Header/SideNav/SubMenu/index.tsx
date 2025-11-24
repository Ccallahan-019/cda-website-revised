import { CMSLink } from '@/components/Link'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { Header } from '@/payload-types'
import { Flex, Grid } from '@radix-ui/themes'
import { MoveLeftIcon } from 'lucide-react'
import { Button } from '@/components/UI/RadixComponents/Buttons'

type Props = {
  onClick: () => void
  onLinkClick: () => void
  subNav: NonNullable<Header['navItems']>[number]['subNav']
}

export default function SubMenu({ onClick, onLinkClick, subNav }: Props) {
  return (
    <Flex direction="column" gap="4" style={{ borderTop: '1px solid var(--gray-6)' }} pb="3">
      <Button onClick={onClick} variant="soft" radius="none">
        <Flex gap="2" width="100%">
          <MoveLeftIcon size={20} />
          <Text as="span">Back</Text>
        </Flex>
      </Button>

      <Flex direction="column" gap="4" px="6" py="1">
        {subNav?.map((navItem, index) => (
          <Flex direction="column" gap="3" key={navItem.id || index}>
            <Text style={{ textTransform: 'uppercase' }}>{navItem.label}</Text>
            <Grid asChild columns="2" gap="1">
              <ul>
                {navItem.links &&
                  navItem.links.map((item, index) => (
                    <li key={index} onClick={onLinkClick}>
                      <CMSLink {...item.link} />
                    </li>
                  ))}
              </ul>
            </Grid>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
