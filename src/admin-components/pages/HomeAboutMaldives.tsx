/* eslint-disable consistent-return */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { Alert, Box, Stack } from '@mui/material'
import {
  aboutMaldivesShortRequest,
  getAboutMaldivesShortRequest,
} from '@/utils/api-requests/about-maldives.request'
import useHomeBgId from '@/utils/useHomeBgId'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'
import CustomLoader from '../common/CustomLoader'
import TextFieldWraper from '../items/TextfieldWraper'

const ReactQuillEditor = dynamic(() => import('../common/ReactQuillEditor'), {
  ssr: false,
})

const HomeAboutMaldives = () => {
  const [isPending, startTransition] = useTransition()
  const [editorText, setEditorText] = useState('')
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const homeBgId = useHomeBgId()
  const [values, setValues] = useState({ title: '', link: '' })

  const handleEditorValue = (value: any) => {
    setEditorText(value)
    setDetectChange(true)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const getAboutMaldivesShort = async () => {
    try {
      startTransition(async () => {
        const res = await getAboutMaldivesShortRequest()
        const data = res?.data
        if (data?.status === 200) {
          setEditorText(data?.data?.description)
          setValues({ title: data?.data?.title, link: data?.data?.link })
        } else {
          alert('Error occured while fetching about maldives data.')
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleSave = async () => {
    if (!values?.title || !values?.link) {
      setAlertMsg({
        type: 'error',
        message: 'Please enter valid title and link.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      return
    }

    if (values?.link?.slice(0, 1) !== '/') {
      setAlertMsg({
        type: 'error',
        message: "Link should contain ' / ' at start.",
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      return
    }

    try {
      startTransition(async () => {
        const res = await aboutMaldivesShortRequest({
          ...values,
          description: editorText,
          homeBgId,
        })
        if (res?.status === 201) {
          getAboutMaldivesShort()
          setDetectChange(false)
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
      setDetectChange(false)
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getAboutMaldivesShort()
  }, [])

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      {isPending && <CustomLoader />}
      {alertMsg.message && (
        <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
          {alertMsg.message}
        </Alert>
      )}
      <HeadingWraper
        title="About Maldives"
        detectChange={detectChange}
        handleSave={handleSave}
      />
      <Box sx={{ mt: 3, pb: 5 }}>
        <Stack direction="row" alignItems="center" gap="20px">
          <TextFieldWraper
            label="Title"
            placeholder="Enter about maldives title."
            value={values?.title}
            name="title"
            onChange={handleChange}
          />
          <TextFieldWraper
            label="link"
            placeholder="Enter read more link."
            value={values?.link}
            name="link"
            onChange={handleChange}
          />
        </Stack>
        <ReactQuillEditor
          handleEditorValue={handleEditorValue}
          value={editorText}
          height={200}
        />
      </Box>
    </CustomCard>
  )
}

export default HomeAboutMaldives
