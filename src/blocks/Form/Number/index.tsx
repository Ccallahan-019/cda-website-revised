import type { TextField as PayloadTextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { TextField } from '@/components/UI/RadixComponents/Inputs/TextField'
import { Label } from '@/components/UI/RadixComponents/Label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
export const Number: React.FC<
  PayloadTextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    min: number
    max: number
    placeholder?: string
    defaultNumberValue: number
  }
> = ({
  name,
  defaultNumberValue,
  errors,
  label,
  register,
  required,
  width,
  placeholder,
  min,
  max,
}) => {
  return (
    <Width width={width}>
      {label && <Label label={label} required={required} htmlFor={name} />}
      <TextField
        defaultValue={defaultNumberValue}
        id={name}
        type="number"
        min={min}
        max={max}
        placeholder={placeholder}
        {...register(name, {
          required,
          valueAsNumber: true, // ensures it's treated as a number, not a string
          validate: (value) => {
            if (typeof value !== 'number' || isNaN(value)) return 'Must be a valid number'
            if (value < min) return `Must be ${min} or greater`
            if (value > max) return `Must be ${max} or less`
            return true
          },
        })}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
