import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import React from 'react'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Callout } from '@radix-ui/themes'
import { InfoIcon, CheckCheckIcon, OctagonAlertIcon, TriangleAlertIcon } from 'lucide-react'
import { RootProps } from '@radix-ui/themes/components/callout'

type Props = {
  enableGutter?: boolean
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({
  enableGutter = true,
  content,
  style: styleFromProps,
}) => {
  const styles = {
    info: {
      color: 'gray',
      icon: <InfoIcon />,
    },
    error: {
      color: 'red',
      icon: <OctagonAlertIcon />,
    },
    success: {
      color: 'green',
      icon: <CheckCheckIcon />,
    },
    warning: {
      color: 'yellow',
      icon: <TriangleAlertIcon />,
    },
  }

  const style = styles[styleFromProps]

  const component = (
    <Callout.Root
      color={style.color as RootProps['color']}
      role={styleFromProps === 'error' ? 'alert' : 'banner'}
    >
      <Callout.Icon>{style.icon}</Callout.Icon>
      <RichText data={content} />
    </Callout.Root>
  )

  return (
    <>
      {enableGutter ? (
        <Container>{component}</Container>
      ) : (
        <Box mx="auto" width="100%">
          {component}
        </Box>
      )}
    </>
  )
}
