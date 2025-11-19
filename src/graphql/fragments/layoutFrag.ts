import { gql } from '@apollo/client'
import { CONTENT_FRAGMENT } from './blocks/content'
import { NEWS_POSTS_FRAGMENT } from './blocks/newsPosts'
import { NEWSLETTERS_FRAGMENT } from './blocks/newsletters'
import { SLIDER_FRAGMENT } from './blocks/slider'
import { STATS_FRAGMENT } from './blocks/stats'
import { SIDE_BAR_FRAGMENT } from './blocks/sideBar'
import { CALENDAR_FRAGMENT } from './blocks/calendar'
import { TABS_FRAGMENT } from './blocks/tabs'
import { CONTACT_CARDS_FRAGMENT } from './blocks/contactCards'
import { COURT_LISTING_FRAGMENT } from './blocks/courtListing'
import { DIOCESE_LISTING_FRAGMENT } from './blocks/dioceseListing'
import { ARCHIVE_FRAGMENT } from './blocks/archive'
import { MEDIA_BLOCK_FRAGMENT } from './blocks/mediaBlock'
import { BANNER_FRAGMENT } from './blocks/banner'
import { CTA_FRAGMENT } from './blocks/callToAction'
import { FORM_BLOCK_FRAGMENT } from './blocks/formBlock'

export const LAYOUT_FRAGMENTS = gql`
  ${CONTENT_FRAGMENT}
  ${NEWS_POSTS_FRAGMENT}
  ${NEWSLETTERS_FRAGMENT}
  ${SLIDER_FRAGMENT}
  ${STATS_FRAGMENT}
  ${SIDE_BAR_FRAGMENT}
  ${CALENDAR_FRAGMENT}
  ${TABS_FRAGMENT}
  ${CONTACT_CARDS_FRAGMENT}
  ${COURT_LISTING_FRAGMENT}
  ${DIOCESE_LISTING_FRAGMENT}
  ${ARCHIVE_FRAGMENT}
  ${MEDIA_BLOCK_FRAGMENT}
  ${BANNER_FRAGMENT}
  ${CTA_FRAGMENT}
  ${FORM_BLOCK_FRAGMENT}
`
