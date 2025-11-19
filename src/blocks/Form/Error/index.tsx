'use client'

import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <Text as="p" mt="1" color="red">
      {(errors[name]?.message as string) || 'This field is required'}
    </Text>
  )
}
