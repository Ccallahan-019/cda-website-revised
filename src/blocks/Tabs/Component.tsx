import { TabsBlock as TabsBlockProps } from '@/payload-types'
import { ContentBlock } from '../Content/Component'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Tabs } from '@radix-ui/themes'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { ContactCardsBlock } from '../ContactCards/Component'

const blockComponents = {
  content: ContentBlock,
  contactCards: ContactCardsBlock,
}

export const TabsBlock: React.FC<TabsBlockProps> = (props) => {
  const { tabs } = props

  const hasTabs = tabs && Array.isArray(tabs) && tabs.length > 0

  if (hasTabs) {
    return (
      <Container>
        <Tabs.Root defaultValue={tabs[0]?.label}>
          <Tabs.List>
            {tabs.map((tab, index) => (
              <Tabs.Trigger key={tab.id || index} value={tab.label}>
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box>
            {tabs.map((tab, index) => (
              <Tabs.Content key={tab.id || index} value={tab.label}>
                {tab.content &&
                  tab.content.length > 0 &&
                  tab.content.map((block, index) => {
                    const blockType = block.blockType

                    if (blockType && blockType in blockComponents) {
                      const Block = blockComponents[blockType]

                      if (Block) {
                        return (
                          <Section key={index}>
                            {/* @ts-expect-error there may be some mismatch between the expected types here */}
                            <Block {...block} />
                          </Section>
                        )
                      }
                    }
                  })}
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Container>
    )
  }

  return null
}
