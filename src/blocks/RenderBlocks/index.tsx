import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ContentBlock } from '@/blocks/Content/Component'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { NewsPostsBlock } from '@/blocks/NewsPosts/Component'
import { NewslettersBlock } from '@/blocks/Newsletters/Component'
import { SliderBlock } from '@/blocks/Slider/Component'
import { StatsBlock } from '@/blocks/Stats/Component'
import { SideBarBlock } from '@/blocks/SideBar/Component'
import { CalendarBlock } from '@/blocks/Calendar/Component'
import { TabsBlock } from '@/blocks/Tabs/Component'
import { ContactCardsBlock } from '@/blocks/ContactCards/Component'
import { CourtListingBlock } from '@/blocks/CourtListing/Component'
import { DioceseListingBlock } from '@/blocks/DioceseListing/Component'
import { ArchiveBlock } from '@/blocks/Archive/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { FormBlock } from '../Form/Component'

const blockComponents = {
  content: ContentBlock,
  newsPosts: NewsPostsBlock,
  newsletters: NewslettersBlock,
  slider: SliderBlock,
  stats: StatsBlock,
  sideBar: SideBarBlock,
  calendar: CalendarBlock,
  tabs: TabsBlock,
  contactCards: ContactCardsBlock,
  courtListing: CourtListingBlock,
  dioceseListing: DioceseListingBlock,
  archive: ArchiveBlock,
  mediaBlock: MediaBlock,
  banner: BannerBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props
  const hasBlocks = Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <Section key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} />
                </Section>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
