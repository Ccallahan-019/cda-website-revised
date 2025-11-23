/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { MediaBlock as MediaBlockProps } from '@/payload-types'
import { AspectRatio, Box, Flex, Grid, Inset, Card } from '@radix-ui/themes'
import { StaticImageData } from 'next/image'
import React, { JSX } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'

export const MediaBlock: React.FC<
  MediaBlockProps & {
    imgClassName?: string
    staticImage?: StaticImageData
    enableGutter?: boolean
  }
> = (props) => {
  const {
    contentType,
    media,
    galleryMedia,
    mediaAlignment,
    content,
    links,
    autoPlay,
    looping,
    imgClassName,
    staticImage,
    includeCaption,
    enableGutter = true,
  } = props

  let component: JSX.Element | null = null
  const caption = media && typeof media === 'object' ? media.caption : undefined

  switch (contentType) {
    case 'media':
      component = (
        <Flex direction="column" gap="2" maxWidth="48rem" mx="auto">
          {(media || staticImage) && (
            <Card>
              <Inset side="all">
                <Media
                  imgClassName={imgClassName ?? 'w-full h-auto'}
                  resource={media}
                  src={staticImage}
                  priority
                />
              </Inset>
            </Card>
          )}
          {caption && includeCaption && (
            <Text size="2" color="gray">
              {caption}
            </Text>
          )}
        </Flex>
      )
      break

    case 'withText':
      component = (
        <Grid columns="12" gap="8">
          <Flex
            gridColumn={{
              initial: 'span 12',
              sm: mediaAlignment === 'left' ? 'span 6' : '7 / span 6',
            }}
            gridRow="1 / 2"
            direction="column"
            justify="center"
          >
            <Flex direction="column" gap="2">
              <Card>
                <Inset side="all">
                  <Media resource={media} imgClassName="w-full h-auto" priority />
                </Inset>
              </Card>
              {caption && includeCaption && (
                <Text size="2" color="gray">
                  {caption}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex
            gridColumn={{
              initial: 'span 12',
              sm: mediaAlignment === 'left' ? '7 / span 6' : 'span 6',
            }}
            gridRow={{ initial: '2 / 3', sm: '1 / 2' }}
            align="center"
          >
            <Flex direction="column" gap="4">
              {content && <RichText data={content} />}
              <Grid columns={{ initial: '1', sm: '2' }} gap="3">
                {Array.isArray(links) &&
                  links.length > 0 &&
                  links.map(({ link }, index) => <CMSLink key={index} {...link} size="4" />)}
              </Grid>
            </Flex>
          </Flex>
        </Grid>
      )
      break

    case 'gallery':
      component = (
        <Box maxWidth="52rem" mx="auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={looping ?? false}
            autoplay={autoPlay ? { delay: 5000 } : false}
            pagination={{ type: 'bullets', clickable: true }}
            style={{
              ['--swiper-pagination-color' as any]: 'var(--accent-11)',
              ['--swiper-pagination-bullet-inactive-color' as any]: 'var(--accent-7)',
              ['--swiper-pagination-bullet-inactive-opacity' as any]: '0.8',
              padding: 4,
            }}
          >
            {Array.isArray(galleryMedia) &&
              galleryMedia.map((media, index) => (
                <SwiperSlide key={index} style={{ padding: '4px 4px 32px 4px' }}>
                  <AspectRatio
                    ratio={16 / 9}
                    style={{
                      border: '2px solid var(--yellow-8)',
                      borderRadius: 'var(--radius-4)',
                      overflow: 'hidden',
                    }}
                  >
                    <Media resource={media} imgClassName="h-full w-full object-cover" priority />
                  </AspectRatio>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      )
  }

  if (component) {
    return <>{enableGutter ? <Container>{component}</Container> : <Box>{component}</Box>}</>
  }

  return null
}
