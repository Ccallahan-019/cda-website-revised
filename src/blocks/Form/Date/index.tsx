'use client'

import * as React from 'react'
import { useState } from 'react'
import { format } from 'date-fns'
import { Popover } from '@radix-ui/themes'
import { DayPicker } from 'react-day-picker'
import { TextField } from '@/components/UI/RadixComponents/Inputs/TextField'
import { DateField } from 'node_modules/@payloadcms/plugin-form-builder/dist/types'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'
import { Width } from '../Width'
import { Label } from '@/components/UI/RadixComponents/Label'
import { Error } from '../Error'
import { CalendarFoldIcon } from 'lucide-react'

export const Date: React.FC<
  DateField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, errors, label, required, width }) => {
  const [open, setOpen] = useState(false)

  return (
    <Width width={width}>
      {label && <Label label={label} htmlFor={name} required={required} />}
      <Controller
        control={control}
        defaultValue={null}
        name={name}
        render={({ field: { onChange, value } }) => {
          const handleSelect = (date: Date | undefined) => {
            if (date) {
              onChange(date)
              setOpen(false)
            }
          }

          return (
            <Popover.Root open={open} onOpenChange={setOpen}>
              <Popover.Trigger>
                <TextField
                  readOnly
                  type="text"
                  icon={<CalendarFoldIcon size={20} />}
                  onClick={() => setOpen(true)}
                  value={value ? format(value, 'P') : ''}
                />
              </Popover.Trigger>
              <Popover.Content>
                <DayPicker animate mode="single" selected={value} onSelect={handleSelect} />
              </Popover.Content>
            </Popover.Root>
          )
        }}
        rules={{ required }}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
