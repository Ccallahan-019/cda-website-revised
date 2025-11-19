'use client'

import { Flex, Text, TextProps } from '@radix-ui/themes'

const Label: React.FC<
  { label: string; required?: boolean; ref?: React.Ref<HTMLLabelElement> } & TextProps
> = ({ label, required, ref, size, wrap, weight, ...props }) => {
  return (
    <Text
      as="label"
      ref={ref}
      size={size ? size : { initial: '2', xs: '3' }}
      wrap={wrap ? wrap : 'pretty'}
      weight={weight ? weight : 'bold'}
      {...props}
    >
      <Flex as="span" gap="1">
        {required && (
          <Text as="span" color="red">
            {'*'}
            <span className="sr-only">required</span>
          </Text>
        )}
        {label}
      </Flex>
    </Text>
  )
}

export { Label }
