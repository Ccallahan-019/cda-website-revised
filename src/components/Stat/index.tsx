'use client'

import { StatsBlock } from '@/payload-types'
import useCountUp from '@/utilities/hooks/useCountUp'
import { Flex } from '@radix-ui/themes'
import { Text } from '../UI/RadixComponents/Typography/Text'

export const Stat: React.FC<StatsBlock['stats'][number]> = (props) => {
  const { value, description, postfix } = props

  const startingValue = value / 2
  const duration = 2000

  const countUp = useCountUp(value, startingValue, duration)

  return (
    <Flex flexGrow="1" direction="column" justify="center" align="center" gap="1">
      {postfix ? <Text size="9">{`${countUp} ${postfix}`}</Text> : <Text size="9">{countUp}</Text>}

      <Text size="5">{description}</Text>
    </Flex>
  )
}
