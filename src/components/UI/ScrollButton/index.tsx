import { ButtonProps, Flex } from '@radix-ui/themes'
import { ArrowDownIcon } from 'lucide-react'
import { AnimateBounce } from '../Animations/AnimateBounce'
import { Button } from '../RadixComponents/Buttons'

export const ScrollButton: React.FC<
  { scrollRef: React.RefObject<HTMLElement | null>; label: string } & ButtonProps
> = ({ scrollRef, label, ...props }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      const el = scrollRef.current
      const bottom = el.getBoundingClientRect().bottom + window.scrollY

      window.scrollTo({
        top: bottom - 56,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      <Flex gap="2" align="center">
        {label}
        <AnimateBounce distance={-3} duration={1}>
          <ArrowDownIcon size={24} strokeWidth={2.5} />
        </AnimateBounce>
      </Flex>
    </Button>
  )
}
