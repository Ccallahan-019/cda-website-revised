'use client'

import { Pagination } from '@/components/UI/Pagination'
import RichText from '@/components/RichText'
import { NewsPost, NewsPostsBlock as NewsPostBlocksProps } from '@/payload-types'
import { useRef, useState } from 'react'
import { NewsItem } from '@/components/NewsItem'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex } from '@radix-ui/themes'
import { Easing, motion, useInView } from 'framer-motion'

export const NewsPostsBlockClient: React.FC<
  { autoPopulatedPosts?: NewsPost[] } & NewsPostBlocksProps
> = (props) => {
  const { introContent, selectionType, posts, pagination, rowsPerPage, autoPopulatedPosts } = props

  // decide which posts to show
  const populatedPosts: NewsPost[] =
    selectionType === 'auto' && Array.isArray(autoPopulatedPosts) && autoPopulatedPosts.length > 0
      ? autoPopulatedPosts
      : (posts as NewsPost[]) || []

  // local page only for animation key + scroll-to-top (Pagination owns the slicing)
  const [currentPage, setCurrentPage] = useState(1)

  const easeFunction: Easing | Easing[] | undefined = 'easeOut'

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeFunction } },
  })

  const listRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(listRef, { once: true, margin: '0px 0px -100px 0px' })

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  if (!populatedPosts) return null

  return (
    <Container>
      <Flex direction="column" gap="6">
        {introContent && <RichText data={introContent} />}

        {pagination ? (
          <Pagination
            items={populatedPosts}
            rowsPerPage={rowsPerPage || populatedPosts.length}
            rangeLabels={{ singular: 'Post', plural: 'Posts' }}
            // We’re letting Pagination manage paging, but we still listen to page changes
            onPageChange={(page) => {
              setCurrentPage(page)
              // avoid jumping on initial mount; this only fires on user change
              scrollToTop()
            }}
            render={(pageItems) => (
              <motion.div
                key={currentPage}
                ref={listRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {pageItems.map((post, index) => (
                  <motion.div key={post.id || index} variants={itemVariants(index)}>
                    <Box>
                      <NewsItem {...post} />
                    </Box>
                  </motion.div>
                ))}
              </motion.div>
            )}
          />
        ) : (
          <motion.div
            key="all"
            ref={listRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {populatedPosts.map((post, index) => (
              <motion.div key={post.id || index} variants={itemVariants(index)}>
                <Box>
                  <NewsItem {...post} />
                </Box>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Flex>
    </Container>
  )
}
