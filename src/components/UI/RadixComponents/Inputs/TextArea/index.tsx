import { TextArea as RadixTextArea, TextAreaProps } from '@radix-ui/themes'

export const TextArea: React.FC<TextAreaProps> = ({ resize, ...props }) => {
  return <RadixTextArea resize={resize ? resize : 'vertical'} {...props} />
}
