import type { CountryField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Label } from '@/components/UI/RadixComponents/Label'
import { Select } from '@radix-ui/themes'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'
import { countryOptions } from './options'

export const Country: React.FC<
  CountryField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, errors, label, required, width }) => {
  return (
    <Width width={width}>
      {label && <Label label={label} htmlFor={name} required={required} />}
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = countryOptions.find((t) => t.value === value)

          return (
            <Select.Root
              onValueChange={(val) => onChange(val)}
              value={controlledValue?.value ?? ''}
            >
              <Select.Trigger id={name} placeholder={label} />
              <Select.Content>
                {countryOptions.map(({ label, value }) => {
                  return (
                    <Select.Item key={value} value={value}>
                      {label}
                    </Select.Item>
                  )
                })}
              </Select.Content>
            </Select.Root>
          )
        }}
        rules={{ required }}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
