import { SerializedTextNode } from '@payloadcms/richtext-lexical'
import { Strong } from '@/components/UI/RadixComponents/Typography/Strong'
import { Em } from '@/components/UI/RadixComponents/Typography/Em'
import { Code } from '@/components/UI/RadixComponents/Typography/Code'

export const FormattedText: React.FC<{ node: SerializedTextNode }> = ({ node }) => {
  const { text, format } = node

  let content = <>{text}</>

  if (format & 1) {
    content = <Strong>{content}</Strong>
  }

  if (format & 2) {
    content = <Em>{content}</Em>
  }

  if (format & 4) {
    content = <s>{content}</s>
  }

  if (format & 8) {
    content = <u>{content}</u>
  }

  if (format & 16) {
    content = <Code variant="soft">{content}</Code>
  }

  if (format & 32) {
    content = <sub>{content}</sub>
  }

  if (format & 64) {
    content = <sup>{content}</sup>
  }

  return content
}
