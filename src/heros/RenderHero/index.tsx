import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '../HighImpact'
import { LowImpactHero } from '../LowImpact'
import { MediaRightHero } from '../MediaRight'

const heroComponents = {
  highImpactHero: HighImpactHero,
  lowImpactHero: LowImpactHero,
  mediaRightHero: MediaRightHero,
}

export const RenderHero: React.FC<{
  hero: Page['hero']
}> = (props) => {
  const { hero: heroes } = props
  const hasHero = Array.isArray(heroes) && heroes.length === 1

  if (hasHero) {
    const hero = heroes[0]

    if (hero) {
      const { blockType } = hero

      if (blockType && blockType in heroComponents) {
        const Hero = heroComponents[blockType]

        return (
          <Fragment>
            {/* @ts-expect-error there may be some mismatch between the expected types here */}
            <Hero {...hero} />
          </Fragment>
        )
      }
    }
  }

  return null
}
