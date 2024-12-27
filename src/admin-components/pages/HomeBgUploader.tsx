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
  const [files, setFiles] = useState([] as File[])
  const [mobileFiles, setMobileFiles] = useState([] as File[])
  const [titles, setTitles] = useState({ title: '', subTitle: '' })
  const [urls, setUrls] = useState<string[]>([])
  const [mobileUrls, setMobileUrls] = useState<string[]>([])
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    setDetectChange(true)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'j8epfynh')

    const res = await uploadImgToCloudinary(formData)
    if (res?.secure_url) {
      if (label === 'Desktop') {
        setFiles([...files, file])
        setUrls([...urls, res.secure_url])
      } else if (label === 'Mobile') {
        setMobileFiles([...mobileFiles, file])
        setMobileUrls([...mobileUrls, res.secure_url])
      }
    }
  }

  const handleDeleteFile = async (label: string, index: number) => {
    if (label === 'Desktop') {
      setFiles(files.filter((_, i) => i !== index))
      const url = urls[index]
      setUrls(urls.filter((_, i) => i !== index))
      await deleteCloudinaryImage(url)
    } else if (label === 'Mobile') {
      setMobileFiles(mobileFiles.filter((_, i) => i !== index))
      const url = mobileUrls[index]
      setMobileUrls(mobileUrls.filter((_, i) => i !== index))
      await deleteCloudinaryImage(url)
    }
    setDetectChange(true)
  }

  const getHomeBgData = async () => {
    try {
      startTransition(async () => {
        const res = await getHomeBgRequest()
        if (res?.status === 200) {
          const { data } = res.data
          setUrls(data?.bgImages || [])
          setMobileUrls(data?.mobileBgImages || [])
          setTitles({
            title: data?.title || '',
            subTitle: data?.subTitle || '',
          })
          localStorage.setItem('homeBgId', JSON.stringify(data?.id))
        }
      })
    } catch (error: any) {
      console.error('Error fetching home background data:', error)
    }
  }

  const handleSave = async () => {
    if (!titles.title) return alert('Please enter a title.')
    if (urls.length < 1) return alert('Please select desktop images.')
    startTransition(async () => {
      try {
        const res = await homeBgRequest({
          ...titles,
          bgImages: urls || [],
          mobileBgImages: mobileUrls || [],
        })

        setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
        setTimeout(() => setAlertMsg({ type: '', message: '' }), 3000)
      } catch (error) {
        console.error('Error during API call:', error)
        setAlertMsg({ type: 'error', message: 'Failed to save data.' })
        setTimeout(() => setAlertMsg({ type: '', message: '' }), 3000)
      }
    })
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitles({ ...titles, title: e.target.value })
            setDetectChange(true)
          }}
        />
        <TextFieldWraper
          label="Subtitle"
          placeholder="Enter Subtitle."
          name="subTitle"
          value={titles.subTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitles({ ...titles, subTitle: e.target.value })
            setDetectChange(true)
          }}
        />
      </Stack>
      <DesktopBgImages
        label="Desktop"
        name="Desktop Background Images"
        handleDeleteFile={(label: string, index: number) =>
          handleDeleteFile(label, index)
        }
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 'Desktop')
        }
        files={files}
        urls={urls}
      />
      <DesktopBgImages
        label="Mobile"
        name="Mobile Background Images"
        handleDeleteFile={(label: string, index: number) =>
          handleDeleteFile(label, index)
        }
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 'Mobile')
        }
        files={mobileFiles}
        urls={mobileUrls}
      />
    </CustomCard>
  )
}

export default HomeBgUploader
