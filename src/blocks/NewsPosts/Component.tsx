import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_NEWS_POSTS } from '@/graphql/queries/blocks/newsPosts'
import { NewsPost, NewsPostsBlock as NewsPostsBlockProps } from '@/payload-types'
import { NewsPostsBlockClient } from './Component.client'

export const NewsPostsBlock: React.FC<NewsPostsBlockProps> = async (props) => {
  const { selectionType, limit } = props

  let newsPosts: NewsPost[] = []

  if (selectionType === 'auto') {
    const client = getApolloServerClient()

    const { data } = await client.query({
      query: GET_NEWS_POSTS,
      variables: { limit },
    })

    const posts = data.NewsPosts.docs

    if (Array.isArray(posts) && posts.length > 0) {
      newsPosts = posts
    }
  }

  return <NewsPostsBlockClient autoPopulatedPosts={newsPosts} {...props} />
}
