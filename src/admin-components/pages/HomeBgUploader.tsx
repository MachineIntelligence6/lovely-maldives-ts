/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Stack } from '@mui/material'

import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import { deleteCloudinaryImage } from '@/utils/cloudinaryImageDel'
import {
  getHomeBgRequest,
  homeBgRequest,
} from '@/utils/api-requests/home.request'
import DesktopBgImages from './DesktopBgImages'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'
import CustomLoader from '../common/CustomLoader'

const HomeBgUploader = () => {
  const [isPending, startTransition] = useTransition()
  const [files, setFiles] = useState([] as any)
  const [mobileFiles, setMobileFiles] = useState([] as any)
  const [titles, setTitles] = useState({ title: '', subTitle: '' })
  const [urls, setUrls] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)

  const handleChange = async (e: any, label: string) => {
    const file = e.target.files[0]
    setDetectChange(true)
    if (label === 'Desktop') {
      setFiles([...files, file])

      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'j8epfynh')
      const res = await uploadImgToCloudinary(formData)
      setUrls([...urls, res?.secure_url])
    } else {
      setMobileFiles([...mobileFiles, file])
    }
  }

  const handleDeleteFile = async (label: any, index: number) => {
    setFiles(files.filter((_: any, i: number) => i !== index))
    setDetectChange(true)

    const url = urls[index]
    setUrls(urls.filter((_: any, i: number) => i !== index))
    const result = await deleteCloudinaryImage(url)
  }

  const getHomeBgData = async () => {
    try {
      startTransition(async () => {
        const res = await getHomeBgRequest()
        const data = res?.data?.data
        if (res?.status === 200) {
          setUrls(data?.bgImages)
          setTitles({ title: data?.title, subTitle: data?.subTitle })
          // if (typeof window !== 'undefined') {
          localStorage.setItem('homeBgId', JSON.stringify(data?.id))
          // }
        } else {
          console.log('response homebg ', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleSave = async () => {
    if (!titles.title) return alert('Please enter title.')
    if (urls?.length < 1) return alert('Please select images.')
    try {
      startTransition(async () => {
        const res = await homeBgRequest({ ...titles, bgImages: urls })
        if (res?.status === 201) {
          getHomeBgData()
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
    getHomeBgData()
  }, [])
  return (
    <CustomCard sx={{ padding: '40px !important' }}>
      {isPending && <CustomLoader />}
      {alertMsg.message && (
        <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
          {alertMsg.message}
        </Alert>
      )}
      <HeadingWraper
        title="Home Background"
        handleSave={handleSave}
        isPending={isPending}
        detectChange={detectChange}
      />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <TextFieldWraper
          label="Title"
          placeholder="Enter Title."
          name="title"
          value={titles.title}
          onChange={(e: any) => {
            setTitles({ ...titles, title: e.target.value })
            setDetectChange(true)
          }}
        />
        <TextFieldWraper
          label="Subtitle"
          placeholder="Enter subtitle."
          name="subTitle"
          value={titles.subTitle}
          onChange={(e: any) => {
            setTitles({ ...titles, subTitle: e.target.value })
            setDetectChange(true)
          }}
        />
      </Stack>

      <DesktopBgImages
        label="Desktop"
        handleDeleteFile={handleDeleteFile}
        handleChange={handleChange}
        files={files}
        urls={urls}
      />
    </CustomCard>
  )
}

export default HomeBgUploader
