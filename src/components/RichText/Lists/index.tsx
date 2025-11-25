import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { Box, Flex } from '@radix-ui/themes'
import { CheckIcon, SquareIcon } from 'lucide-react'

type ListType = 'number' | 'bullet' | 'check'

type ListProps = {
  listType: ListType
  children: React.ReactNode[]
}

type ListItemProps = {
  checked?: boolean | null
  isSubList?: boolean
  indent?: number
  value?: number
  children: React.ReactNode
}

const itemClassMap = [
  {
    bullet: 'disc',
    number: 'decimal',
  },
  {
    bullet: 'circle',
    number: 'list-uppercase',
  },
  {
    bullet: 'square',
    number: 'list-lowercase',
  },
]

export const List: React.FC<ListProps> = ({ listType, children }) => {
  switch (listType) {
    case 'bullet':
      return <ul className="ml-[var(--space-5)]">{children}</ul>
    case 'number':
      return <ol className="ml-[var(--space-5)]">{children}</ol>
    case 'check':
      return <ul className="ml-[var(--space-5)]">{children}</ul>
  }
}

export const ListItem: React.FC<ListItemProps> = ({
  checked,
  children,
  isSubList,
  indent,
  value,
}) => {
  const isChecklistItem = typeof checked === 'boolean'
  const isChecked = checked === true
  const styleIndex = indent ? indent % 3 : 0

  const itemClasses = `${itemClassMap[styleIndex]?.bullet} ${itemClassMap[styleIndex]?.number}`

  if (isSubList) {
    return <li>{children}</li>
  }

  if (isChecklistItem) {
    return (
      <Flex asChild gap="2" align="start" ml="-5">
        <li>
          <Box>
            {isChecked ? (
              <CheckIcon size={20} strokeWidth={1.75} color="var(--accent-9)" />
            ) : (
              <SquareIcon size={20} strokeWidth={1.75} />
            )}
          </Box>
          <Text as="p">{children}</Text>
        </li>
      </Flex>
    )
  }

  return (
    <li value={value} className={itemClasses}>
      <Text as="p">{children}</Text>
    </li>
  )
}
