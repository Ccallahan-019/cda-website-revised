export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { cookies, draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import RichText from '@/components/RichText'
import { Flex } from '@radix-ui/themes'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { CollectionArchive } from '@/components/CollectionArchive'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { GET_PROJECT_BY_SLUG, GET_PROJECT_SLUGS } from '@/graphql/queries/pages/project'
import { Project } from '@/payload-types'
import { ProjectHero } from '@/heros/ProjectHero'

export const revalidate = 3600
export const dynamicParams = true

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export async function generateStaticParams() {
  const client = getApolloServerClient()
  const projects = await client.query({
    query: GET_PROJECT_SLUGS,
  })

  const params = projects.data.Projects.docs?.map(({ slug }: { slug: string }) => {
    return { slug }
  })

  return params
}

const queryFundraiserBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const client = getApolloServerClient(token)

  const { data } = await client.query({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug, draft },
  })

  return data.Projects.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  let project

  if (slug) {
    project = await queryFundraiserBySlug({
      slug,
    })
  }

  return generateMeta({ doc: project })
}

export default async function ProjectTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  let project: Project | null = null

  if (slug) {
    project = await queryFundraiserBySlug({
      slug,
    })
  }

  if (!project) {
    return notFound()
  }

  const { relatedProjects, content } = project

  const relatedProjectObjs = relatedProjects?.filter((project) => typeof project === 'object')

  return (
    <Article>
      {draft && <LivePreviewListener />}

      <ProjectHero project={project} />

      <Container>
        <Section maxWidth="64rem" mx="auto">
          <RichText data={content} />
        </Section>

        {Array.isArray(relatedProjectObjs) && relatedProjectObjs.length > 0 && (
          <Section>
            <Flex direction="column" gap="5">
              <Heading as="h2">Related Projects</Heading>
              <CollectionArchive docs={relatedProjectObjs} relationTo="events" />
            </Flex>
          </Section>
        )}
      </Container>
    </Article>
  )
}
