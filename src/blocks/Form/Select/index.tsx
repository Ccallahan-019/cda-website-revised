import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Label } from '@/components/UI/RadixComponents/Label'
import { Select as RadixSelect } from '@radix-ui/themes'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'

export const Select: React.FC<
  SelectField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, errors, label, options, required, width, defaultValue }) => {
  return (
    <Width width={width}>
      {label && <Label label={label} htmlFor={name} required={required} />}
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = options.find((t) => t.value === value)

          return (
            <RadixSelect.Root
              onValueChange={(val) => onChange(val)}
              value={controlledValue?.value ?? ''}
            >
              <RadixSelect.Trigger id={name} placeholder={label} />
              <RadixSelect.Content>
                {options.map(({ label, value }) => {
                  return (
                    <RadixSelect.Item key={value} value={value}>
                      {label}
                    </RadixSelect.Item>
                  )
                })}
              </RadixSelect.Content>
            </RadixSelect.Root>
          )
        }}
        rules={{ required }}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
