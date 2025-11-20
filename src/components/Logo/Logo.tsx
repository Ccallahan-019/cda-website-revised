import React from 'react'
import { Media } from '../Media'
import { Media as MediaProps } from '@/payload-types'

export const Logo: React.FC<{ imageClassName?: string } & MediaProps> = ({
  imageClassName,
  ...media
}) => {
  return (
    <>
      {media && typeof media === 'object' && (
        <Media priority imgClassName={imageClassName ?? 'h-[3rem] w-auto'} resource={media} />
      )}
    </>
  )
}
