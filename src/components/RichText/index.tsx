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

import { Box } from '@radix-ui/themes'
import { ExternalLinkIcon } from 'lucide-react'
import { Heading } from '../UI/RadixComponents/Typography/Heading'
import { Blockquote } from '../UI/RadixComponents/Typography/Blockquote'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Link } from '../UI/RadixComponents/Typography/Links'
import { FormattedText } from './FormattedText'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { List, ListItem } from './Lists'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MediaBlockProps | BannerBlockProps | CTABlockProps>

const Spacer: React.FC<{
  children: React.ReactNode
  isBlock?: boolean
  indent?: number
}> = ({ children, isBlock, indent }) => {
  return (
    <Box
      pl={indent ? `${indent * 2}rem` : '0'}
      className={`${isBlock ? 'richtext-block' : 'richtext-child'}`}
    >
      {children}
    </Box>
  )
}

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }

  const slug = value.slug
  const url = value.url

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
      return `${url}`
    default:
      return `/${slug}`
  }
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,

  paragraph: ({ node, nodesToJSX }) => {
    const { indent } = node

    return (
      <Spacer indent={indent}>
        <Text as="p">{nodesToJSX({ nodes: node.children })}</Text>
      </Spacer>
    )
  },

  heading: ({ node, nodesToJSX }) => {
    const { indent, tag } = node

    return (
      <Spacer indent={indent}>
        <Heading as={tag}>{nodesToJSX({ nodes: node.children })}</Heading>
      </Spacer>
    )
  },

  quote: ({ node, parent, nodesToJSX }) => {
    const { indent } = node

    return (
      <Spacer indent={indent}>
        <Blockquote>{nodesToJSX({ nodes: node.children, parent })}</Blockquote>
      </Spacer>
    )
  },

  list: ({ node, nodesToJSX }) => {
    const { listType } = node

    return <List listType={listType}>{nodesToJSX({ nodes: node.children })}</List>
  },

  listitem: ({ node, nodesToJSX }) => {
    const { checked, indent, value } = node
    const subList = node.children && node.children[0]?.type === 'list'

    return (
      <ListItem checked={checked} isSubList={subList} indent={indent} value={value}>
        {nodesToJSX({ nodes: node.children })}
      </ListItem>
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
        {newTab && (
          <ExternalLinkIcon
            style={{ display: 'inline', paddingLeft: '2px', verticalAlign: 'top' }}
            size={14}
          />
        )}
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
