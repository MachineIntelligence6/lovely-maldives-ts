'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Box, Stack, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import BackupIcon from '@mui/icons-material/Backup'
import Image from 'next/image'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import {
  getSocialLinkSectionRequest,
  socialLinkSectionRequest,
} from '@/utils/api-requests/social.request'
import useHomeBgId from '@/utils/useHomeBgId'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'
import TextFieldWraper from '../items/TextfieldWraper'
import CustomLoader from '../common/CustomLoader'

const SocialLinkSection = () => {
  const [isPending, startTransition] = useTransition()
  const [file, setFile] = useState(null as any)
  const [imgUrl, setImgUrl] = useState('')
  const [detectChange, setDetectChange] = useState(true)
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const homeBgId = useHomeBgId()
  const [values, setValues] = useState({
    title: '',
    socialMedia: '',
    link: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleFileChange = async (e: any) => {
    const value = e.target.files?.[0]
    setFile(value)

    const formData = new FormData()
    formData.append('file', value as any)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    setImgUrl(res?.secure_url)
  }
  console.log('images ', imgUrl)
  const getSocialLinkSection = async () => {
    try {
      startTransition(async () => {
        const res = await getSocialLinkSectionRequest()
        console.log('response ', res)
        const data = res?.data
        console.log('data ', data)
        if (data?.status === 200) {
          setValues(data?.data)
          setImgUrl(data?.data?.image)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const submitData = async () => {
    if (!values?.title || !values.socialMedia || !values.link) {
      setAlertMsg({ type: 'error', message: 'All fields are required.' })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 2000)
    } else {
      // const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
      try {
        startTransition(async () => {
          const res = await socialLinkSectionRequest({
            title: values?.title,
            socialMedia: values?.socialMedia,
            link: values?.link,
            image: imgUrl,
            homeBgId,
          })
          if (res?.status === 201) {
            getSocialLinkSection()
            setAlertMsg({
              type: 'success',
              message: 'Data saved successfully.',
            })
            setTimeout(() => {
              setAlertMsg({ type: '', message: '' })
            }, 3000)
          }
        })
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
  }

  useEffect(() => {
    getSocialLinkSection()
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
        title="Social Link Section"
        detectChange={detectChange}
        handleSave={submitData}
      />
      <TextFieldWraper
        label="Title"
        placeholder="Enter Title."
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <TextFieldWraper
          label="Social Media"
          placeholder="e.g. Whatsapp."
          name="socialMedia"
          value={values.socialMedia}
          onChange={handleChange}
        />
        <TextFieldWraper
          label="Social Media Link"
          placeholder="Enter social media link."
          name="link"
          value={values.link}
          onChange={handleChange}
        />
      </Stack>

      <Box>
        <label htmlFor="bgFileInput">
          <input
            type="file"
            id="bgFileInput"
            hidden
            onChange={handleFileChange}
          />
          <Box
            sx={{
              width: '100%',
              minHeight: '250px',
              maxHeight: '450px',
              border: '1px dashed gray',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            {file || imgUrl ? (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    right: '1rem',
                    top: '1rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 999,
                    bgcolor: 'rgba(0,0,0,0.6)',
                  }}
                >
                  <EditIcon
                    sx={{
                      fontSize: '25px',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
                <Image
                  width={1000}
                  height={350}
                  src={imgUrl || URL.createObjectURL(file)}
                  style={{ objectFit: 'cover' }}
                  alt="bg-img"
                />
              </Box>
            ) : (
              <>
                <BackupIcon
                  sx={{
                    fontSize: '55px',
                    color: 'var(--brown)',
                  }}
                />
                <Typography
                  variant="body1"
                  color="var(--brown)"
                  sx={{ mt: 2, fontSize: '18px' }}
                >
                  Upload Background Image
                </Typography>
              </>
            )}
          </Box>
        </label>
      </Box>
    </CustomCard>
  )
}

export default SocialLinkSection
