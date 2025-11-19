import { CalendarBlock as CalendarBlockProps } from '@/payload-types'
import { CalendarItem } from '@/components/CalendarItem'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Card, Flex, Grid, Separator } from '@radix-ui/themes'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'

export const CalendarBlock: React.FC<CalendarBlockProps> = (props) => {
  const { intro, months } = props

  return (
    <Container>
      <Card size="4" style={{ boxShadow: 'var(--shadow-5)' }}>
        <Flex direction="column" gap="5">
          {intro && <RichText data={intro} />}

          <Grid columns={{ initial: '1', md: '2', lg: '3', xl: '4' }} gap="5">
            {Array.isArray(months) &&
              months.length > 0 &&
              months.map((month, index) => (
                <Box key={month.id || index}>
                  <Box
                    p="2"
                    style={{
                      backgroundColor: 'var(--accent-4)',
                      borderTopLeftRadius: 'var(--radius-3)',
                      borderTopRightRadius: 'var(--radius-3)',
                    }}
                  >
                    {month.title && <Heading as="h5">{month.title}</Heading>}
                  </Box>
                  <Separator orientation="horizontal" size="4" />
                  {Array.isArray(month.items) && month.items.length > 0 && (
                    <Flex asChild direction="column" gap="2" mt="2">
                      <ul>
                        {month.items.map((item, index) => {
                          if (item.item) {
                            return <CalendarItem key={item.id || index}>{item.item}</CalendarItem>
                          }
                          return null
                        })}
                      </ul>
                    </Flex>
                  )}
                </Box>
              ))}
          </Grid>
        </Flex>
      </Card>
    </Container>
  )
}
