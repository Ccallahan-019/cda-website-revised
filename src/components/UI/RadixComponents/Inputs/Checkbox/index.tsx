import { Checkbox as RadixCheckbox, CheckboxProps, Flex, Text } from '@radix-ui/themes'

export const Checkbox: React.FC<
  { label?: string; ref?: React.Ref<HTMLLabelElement>; htmlFor?: string } & CheckboxProps
> = ({ label, required, ref, htmlFor, ...props }) => {
  if (label) {
    return (
      <Text as="label" ref={ref} size={{ initial: '3', xs: '4' }} wrap="pretty" htmlFor={htmlFor}>
        <Flex as="span" gap="2">
          <RadixCheckbox {...props} /> {label}
          {required && (
            <Text as="span" color="red">
              {'*'}
              <span className="sr-only">required</span>
            </Text>
          )}
        </Flex>
      </Text>
    )
  } else {
    return <RadixCheckbox required={required} {...props} />
  }
}
