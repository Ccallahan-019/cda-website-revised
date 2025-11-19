import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Controller } from 'react-hook-form'

import { Checkbox as CheckboxUI } from '@/components/UI/RadixComponents/Inputs/Checkbox'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl>
    control: Control
    defaultCheckValue: boolean
  }
> = ({ control, name, defaultCheckValue, errors, label, required, width }) => {
  return (
    <Width width={width}>
      <Controller
        name={name}
        control={control}
        defaultValue={!!defaultCheckValue}
        render={({ field: { value, onChange, onBlur, ref } }) => (
          <CheckboxUI
            checked={value}
            onCheckedChange={onChange}
            onBlur={onBlur}
            id={name}
            label={label}
            htmlFor={name}
            required={required}
            ref={ref}
          />
        )}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
