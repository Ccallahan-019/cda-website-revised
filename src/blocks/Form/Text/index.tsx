import type { TextField as PayloadTextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import React, { useState } from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

import { TextField } from '@/components/UI/RadixComponents/Inputs/TextField'
import { Label } from '@/components/UI/RadixComponents/Label'

export const Text: React.FC<
  PayloadTextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    type: 'text' | 'password' | 'tel'
    placeholder: string
  }
> = ({ name, defaultValue, errors, label, register, required, width, type, placeholder }) => {
  const [value, setValue] = useState(defaultValue || '')

  const formatPhoneNumber = (input: string): string => {
    const numbers = input.replace(/\D/g, '') // Remove non-digits
    const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)

    if (!match) return numbers

    let formatted = ''
    if (match[1]) formatted += `(${match[1]}`
    if (match[2]) formatted += `) ${match[2]}`
    if (match[3]) formatted += `-${match[3]}`

    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const digitsOnly = raw.replace(/\D/g, '')

    // Allow deletion even if format looks wrong
    if (digitsOnly.length === 0) {
      setValue('')
      onChange({ ...e, target: { ...e.target, value: '' } })
      return
    }

    if (digitsOnly.length > 10) return // Optional: cap length

    const formatted = formatPhoneNumber(digitsOnly)

    setValue(formatted)

    // Ensure react-hook-form sees the formatted value
    onChange({
      ...e,
      target: {
        ...e.target,
        value: formatted,
      },
    })
  }

  const { onChange, onBlur, name: fieldName, ref } = register(name, { required })

  return (
    <Width width={width}>
      {label && <Label label={label} required={required} htmlFor={name} />}
      {type === 'tel' ? (
        <TextField
          id={name}
          name={fieldName}
          type="tel"
          value={value}
          onChange={handlePhoneChange}
          onBlur={onBlur}
          ref={ref}
          placeholder={placeholder}
        />
      ) : (
        <TextField
          defaultValue={defaultValue}
          id={name}
          type={type}
          {...register(name, { required })}
          placeholder={placeholder}
        />
      )}

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
