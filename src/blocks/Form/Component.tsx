'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Card } from '@/components/UI/RadixComponents/Card'
import { Box, Button, Flex, Grid, Spinner } from '@radix-ui/themes'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'

import { zodResolver } from '@hookform/resolvers/zod'
import { buildZodSchema } from './buildZodSchema'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const schema = buildZodSchema(formFromProps?.fields || [])

  const formMethods = useForm({
    resolver: zodResolver(schema),
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value: value === null ? '' : value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/submit-form`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <Container>
      <Grid columns={{ initial: '1', md: '2' }} gap="5">
        {enableIntro && introContent && (
          <Box>
            <RichText data={introContent} enableGutter={false} />
          </Box>
        )}
        <Card size="3">
          <FormProvider {...formMethods}>
            {!isLoading && hasSubmitted && confirmationType === 'message' && (
              <RichText data={confirmationMessage} />
            )}

            {!hasSubmitted && (
              <Flex asChild direction="column" gap="5">
                <form id={formID} onSubmit={handleSubmit(onSubmit)}>
                  <Flex direction="column" gap="4">
                    {formFromProps &&
                      formFromProps.fields &&
                      formFromProps.fields?.map((field, index) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const Field: React.FC<any> =
                          fields?.[field.blockType as keyof typeof fields]
                        if (Field) {
                          return (
                            <Box key={index}>
                              <Field
                                form={formFromProps}
                                {...field}
                                {...formMethods}
                                control={control}
                                errors={errors}
                                register={register}
                              />
                            </Box>
                          )
                        }
                        return null
                      })}
                  </Flex>

                  <Button
                    color="amber"
                    form={formID}
                    type="submit"
                    disabled={isLoading && !hasSubmitted}
                  >
                    {isLoading && !hasSubmitted ? (
                      <Flex align="center" gap="2">
                        <Spinner loading={isLoading && !hasSubmitted} />
                        <Text>Submitting, please wait...</Text>
                      </Flex>
                    ) : (
                      submitButtonLabel
                    )}
                  </Button>
                </form>
              </Flex>
            )}
            {error && (
              <Text
                mt="3"
                as="p"
                size="4"
                color="red"
              >{`${error.status || '500'}: ${error.message || ''}`}</Text>
            )}
          </FormProvider>
        </Card>
      </Grid>
    </Container>
  )
}
