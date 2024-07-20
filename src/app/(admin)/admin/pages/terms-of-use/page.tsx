/* eslint-disable no-alert */

'use client'

import dynamic from 'next/dynamic'
import { Alert, Box } from '@mui/material'
import React, { useEffect, useState, useTransition } from 'react'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import {
  addPrivacyPolicyRequest,
  getPrivacyPolicyRequest,
} from '@/utils/api-requests/privacy-policy.request'
import {
  addTermsRequest,
  getTermsRequest,
} from '@/utils/api-requests/term-os-use.request'

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const PrivacyPolicy = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)

  const [value, setValue] = useState('')
  const [values, setValues] = useState({ title: '' })

  const handleEditorValue = (val: any) => {
    setValue(val)
  }

  const handleSave = () => {
    try {
      startTransition(async () => {
        const res = await addTermsRequest({
          title: values?.title,
          description: value,
        })
        const data = res?.data
        if (data?.status === 201) {
          getTermsofUse()
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

  const getTermsofUse = async () => {
    try {
      startTransition(async () => {
        const res = await getTermsRequest()
        const data = res?.data
        if (data?.status === 200) {
          setValue(data?.data?.description)
          setValues({ title: data?.data?.title })
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getTermsofUse()
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
        title="Terms & Conditions"
        detectChange={detectChange}
        handleSave={handleSave}
      />

      <Box sx={{ mb: 3 }}>
        <TextFieldWraper
          label="Title"
          placeholder="Enter title."
          value={values?.title}
          name="title"
          onChange={(e: any) => setValues({ ...values, title: e.target.value })}
        />
      </Box>

      <Box sx={{ mt: 3 }}>
        <JoditTextEditor
          handleEditorValue={(val: any) => handleEditorValue(val)}
          value={value}
        />
      </Box>
    </CustomCard>
  )
}

export default PrivacyPolicy
