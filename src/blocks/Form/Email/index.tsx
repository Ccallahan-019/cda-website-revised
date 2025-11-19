import type { EmailField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { TextField } from '@/components/UI/RadixComponents/Inputs/TextField'
import { Label } from '@/components/UI/RadixComponents/Label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Email: React.FC<
  EmailField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    placeholder?: string
  }
> = ({ name, defaultValue, errors, label, register, required, width, placeholder }) => {
  return (
    <Width width={width}>
      {label && <Label label={label} required={required} htmlFor={name} />}
      <TextField
        defaultValue={defaultValue}
        id={name}
        type="email"
        placeholder={placeholder}
        {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required })}
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
