'use client'

import React, { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { Alert, Box } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import {
  aboutMaldivesRequest,
  getAboutMaldivesRequest,
} from '@/utils/api-requests/about-maldives.request'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import CustomLoader from '@/admin-components/common/CustomLoader'
import {
  aboutUsRequest,
  getAboutUsRequest,
} from '@/utils/api-requests/aboutus-short.request'
import {
  contactUsRequest,
  getContactUsRequest,
} from '@/utils/api-requests/contactus.request'

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const ContactUs = () => {
  const [isPending, startTransition] = useTransition()
  const [detectChange, setDetectChange] = useState(true)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [editorText, setEditorText] = useState('')
  const [values, setValues] = useState({ title: '' })

  const handleEditorValue = (val: any) => {
    setEditorText(val)
  }

  const getContactUs = async () => {
    try {
      startTransition(async () => {
        const res = await getContactUsRequest()
        const data = res?.data
        if (data?.status === 200) {
          setEditorText(data?.data?.description)
          setValues(data?.data)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const submitData = async () => {
    try {
      startTransition(async () => {
        const res = await contactUsRequest({
          ...values,
          description: editorText,
        })
        const data = res?.data
        if (data?.status === 201) {
          getContactUs()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
      // setDetectChange(false)
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
    getContactUs()
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
        title="Contact Us"
        detectChange={detectChange}
        handleSave={submitData}
      />
      <Box sx={{ mt: 3, pb: 5 }}>
        {/* <ReactQuillEditor height={400} /> */}
        <Box sx={{ mb: 4 }}>
          <TextFieldWraper
            label="Title"
            placeholder="Enter Contact Us Title."
            value={values?.title}
            name="title"
            onChange={(e: any) =>
              setValues({ ...values, title: e.target.value })
            }
          />
        </Box>
        <JoditTextEditor
          handleEditorValue={(val: any) => handleEditorValue(val)}
          value={editorText}
        />
      </Box>
    </CustomCard>
  )
}

export default ContactUs
