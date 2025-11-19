import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'
import type {
  MediaBlock as MediaBlockProps,
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
} from '@/payload-types'

import { Box, Flex } from '@radix-ui/themes'
import { CheckIcon, SquareIcon } from 'lucide-react'
import { Heading } from '../UI/RadixComponents/Typography/Heading'
import { Blockquote } from '../UI/RadixComponents/Typography/Blockquote'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Link } from '../UI/RadixComponents/Typography/Link'
import { FormattedText } from './FormattedText'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MediaBlockProps | BannerBlockProps | CTABlockProps>

const Spacer: React.FC<{ children: React.ReactNode; isBlock?: boolean }> = ({
  children,
  isBlock,
}) => {
  return <div className={`${isBlock ? 'richtext-block' : 'richtext-child'}`}>{children}</div>
}

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  switch (relationTo) {
    case 'court':
      return `courts/${slug}`
    case 'event':
      return `events/${slug}`
    case 'fundraiser':
      return `fundraisers/${slug}`
    case 'charity':
      return `charities/${slug}`
    case 'project':
      return `projects/${slug}`
    case 'media':
      return `${value.url}`
    default:
      return `/${slug}`
  }
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,

  paragraph: ({ node, nodesToJSX }) => {
    const { indent } = node

    return (
      <Spacer>
        <Box pl={`${indent * 24}px`}>
          <Text as="p">{nodesToJSX({ nodes: node.children })}</Text>
        </Box>
      </Spacer>
    )
  },

  heading: ({ node, nodesToJSX }) => {
    const { indent, tag } = node

    return (
      <Spacer>
        <Box pl={`${indent * 24}px`}>
          <Heading as={tag}>{nodesToJSX({ nodes: node.children })}</Heading>
        </Box>
      </Spacer>
    )
  },

  quote: ({ node, nodesToJSX }) => {
    const { indent } = node

    return (
      <Spacer>
        <Box pl={`${indent * 24}px`}>
          <Blockquote>{nodesToJSX({ nodes: node.children })}</Blockquote>
        </Box>
      </Spacer>
    )
  },

  list: ({ node, nodesToJSX }) => {
    const { indent, listType } = node

    const listClass = {
      number: 'list-decimal',
      bullet: 'list-disc',
      check: 'list-none',
    }[listType]

    return (
      <Spacer>
        <Box pl={`${indent * 24}px`}>
          <ul className={`${listClass} list-outside`}>{nodesToJSX({ nodes: node.children })}</ul>
        </Box>
      </Spacer>
    )
  },

  listitem: ({ node, nodesToJSX }) => {
    const { checked, indent } = node

    const isChecklistItem = typeof checked === 'boolean'
    const isChecked = checked === true

    return (
      <li className={`pl-[${indent * 24}px]`}>
        {isChecklistItem ? (
          <Flex gap="2" align="center">
            {isChecked ? <CheckIcon color="var(--purple-9)" /> : <SquareIcon />}
            <Text>{nodesToJSX({ nodes: node.children })}</Text>
          </Flex>
        ) : (
          <Text>{nodesToJSX({ nodes: node.children })}</Text>
        )}
      </li>
    )
  },

  text: ({ node }) => {
    return <FormattedText node={node} />
  },

  link: ({ node, nodesToJSX }) => {
    const { url, linkType, newTab, doc } = node.fields
    const children = nodesToJSX({ nodes: node.children })
    let href = url

    if (linkType === 'internal' && doc) {
      try {
        href = internalDocToHref({ linkNode: node })
      } catch (err) {
        console.warn('Link conversion failed:', err)
      }
    }

    return (
      <Link href={href || '/'} newTab={newTab}>
        {children}
      </Link>
    )
  },

  blocks: {
    mediaBlock: ({ node }) => (
      <Spacer isBlock>
        <MediaBlock enableGutter={false} {...node.fields} />
      </Spacer>
    ),
    banner: ({ node }) => (
      <Spacer isBlock>
        <BannerBlock enableGutter={false} {...node.fields} />
      </Spacer>
    ),
    cta: ({ node }) => (
      <Spacer isBlock>
        <CallToActionBlock enableGutter={false} ctaLinks={node.fields.links} {...node.fields} />
      </Spacer>
    ),
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, ...rest } = props
  return <ConvertRichText converters={jsxConverters} className={className} {...rest} />
}
