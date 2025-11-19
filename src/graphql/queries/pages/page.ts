import { gql } from '@apollo/client'
import { LAYOUT_FRAGMENTS } from '@/graphql/fragments/layoutFrag'
import { HIGH_IMPACT_HERO_FRAGMENT } from '@/graphql/fragments/heroes/highImpactHero'
import { LOW_IMPACT_HERO_FRAGMENT } from '@/graphql/fragments/heroes/lowImpactHero'
import { MEDIA_RIGHT_HERO_FRAGMENT } from '@/graphql/fragments/heroes/mediaRightHero'

export const GET_PAGE_SLUGS = gql`
  query Pages {
    Pages(limit: 1000, draft: false, pagination: false) {
      docs {
        slug
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug } }, draft: $draft, pagination: false) {
      docs {
        id
        title
        slug
        hero {
          ...HighImpactHeroFields
          ...LowImpactHeroFields
          ...MediaRightHeroFields
        }
        layout {
          ...ContentBlockFields
          ...NewsPostsBlockFields
          ...NewslettersBlockFields
          ...SliderBlockFields
          ...StatsBlockFields
          ...SideBarBlockFields
          ...CalendarBlockFields
          ...TabsBlockFields
          ...ContactCardsBlockFields
          ...CourtListingBlockFields
          ...DioceseListingBlockFields
          ...ArchiveBlockFields
          ...MediaBlockFields
          ...BannerBlockFields
          ...CallToActionBlockFields
          ...FormBlockFields
        }
      }
    }
  }
  ${LAYOUT_FRAGMENTS}
  ${HIGH_IMPACT_HERO_FRAGMENT}
  ${LOW_IMPACT_HERO_FRAGMENT}
  ${MEDIA_RIGHT_HERO_FRAGMENT}
`
