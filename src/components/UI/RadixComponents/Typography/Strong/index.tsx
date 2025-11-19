import { Strong as RadixStrong, StrongProps } from '@radix-ui/themes'

export const Strong: React.FC<StrongProps> = (props) => {
  const { wrap } = props

  return <RadixStrong wrap={wrap ? wrap : 'pretty'} {...props} />
}
