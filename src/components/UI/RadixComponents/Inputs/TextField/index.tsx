'use client'

import { useState } from 'react'

import { IconButton, TextField as RadixTextField } from '@radix-ui/themes'
import { RootProps } from '@radix-ui/themes/components/text-field'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

const TextField: React.FC<
  {
    type: 'text' | 'password' | 'tel' | 'email' | 'number' | 'date'
    ref?: React.Ref<HTMLInputElement>
    icon?: React.ReactNode
  } & RootProps
> = ({ type, ref, icon, ...props }) => {
  const [showValue, setShowValue] = useState(false)
  const toggle = () => setShowValue((prev) => !prev)

  return (
    <RadixTextField.Root
      size="3"
      type={showValue && type === 'password' ? 'text' : type}
      ref={ref}
      {...props}
    >
      {icon && <RadixTextField.Slot side="left">{icon}</RadixTextField.Slot>}
      {type === 'password' && (
        <RadixTextField.Slot side="right">
          <IconButton
            type="button"
            size="1"
            variant="ghost"
            onClick={toggle}
            aria-label={showValue ? 'Hide Value' : 'Show Value'}
          >
            {showValue ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </IconButton>
        </RadixTextField.Slot>
      )}
    </RadixTextField.Root>
  )
}

export { TextField }
