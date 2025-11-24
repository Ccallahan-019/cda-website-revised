'use client'

import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { SliderBlock as SliderBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Button, Flex } from '@radix-ui/themes'
import { Card } from '@/components/UI/RadixComponents/Card'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export const SliderBlock: React.FC<SliderBlockProps> = (props) => {
  const { slides } = props

  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      typeof swiperInstance.params.navigation !== 'boolean'
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current
      swiperInstance.params.navigation.nextEl = nextRef.current
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [swiperInstance])

  return (
    <Container>
      <Flex justify="center" gap="2" mb="4">
        <Button
          ref={prevRef}
          size={{ initial: '2', xs: '3' }}
          variant="soft"
          onClick={() => {
            setActiveIndex(activeIndex - 1)
          }}
          disabled={activeIndex === 0}
        >
          <ChevronLeftIcon size={20} /> Prev
        </Button>
        <Button
          ref={nextRef}
          size={{ initial: '2', xs: '3' }}
          variant="soft"
          onClick={() => {
            setActiveIndex(activeIndex + 1)
          }}
          disabled={activeIndex === slides.length - 1}
        >
          Next <ChevronRightIcon size={20} />
        </Button>
      </Flex>
      <Swiper modules={[Navigation]} slidesPerView={1} onSwiper={setSwiperInstance}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ padding: '0px 10px 0 10px' }}>
            <Card size="4">
              <RichText data={slide.richText} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
