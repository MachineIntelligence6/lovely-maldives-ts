/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { Alert, Box } from '@mui/material'
import {
  aboutMaldivesShortRequest,
  getAboutMaldivesShortRequest,
} from '@/utils/api-requests/about-maldives.request'
import useHomeBgId from '@/utils/useHomeBgId'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'
import CustomLoader from '../common/CustomLoader'

const ReactQuillEditor = dynamic(() => import('../common/ReactQuillEditor'), {
  ssr: false,
})

const HomeAboutMaldives = () => {
  const [isPending, startTransition] = useTransition()
  const [editorText, setEditorText] = useState('')
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const homeBgId = useHomeBgId()
  // const [homeBgId, setHomeBgId] = useState('')

  const handleEditorValue = (value: any) => {
    setEditorText(value)
    setDetectChange(true)
  }

  const getAboutMaldivesShort = async () => {
    try {
      startTransition(async () => {
        const res = await getAboutMaldivesShortRequest()
        const data = res?.data?.data
        if (res?.status === 200) {
          setEditorText(data?.description)
        } else {
          alert('Error occured while fetching about maldives data.')
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleSave = async () => {
    // const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
    try {
      startTransition(async () => {
        const res = await aboutMaldivesShortRequest({
          title: 'About Maldives',
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
