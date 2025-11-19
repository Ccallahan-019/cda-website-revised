import { Block } from 'payload'
import { Content } from '../Content/config'
import { ContactCards } from '../ContactCards/config'

export const Tabs: Block = {
  slug: 'tabs',
  interfaceName: 'TabsBlock',
  fields: [
    {
      name: 'tabs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [Content, ContactCards],
        },
      ],
      maxRows: 3,
    },
  ],
}
