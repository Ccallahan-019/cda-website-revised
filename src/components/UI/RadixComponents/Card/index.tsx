import { Card as RadixCard } from '@radix-ui/themes'
import { CardProps } from '@radix-ui/themes'

export const Card: React.FC<CardProps> = (props) => {
  return <RadixCard {...props} style={{ boxShadow: 'var(--shadow-3)', flexGrow: 1 }} />
}
