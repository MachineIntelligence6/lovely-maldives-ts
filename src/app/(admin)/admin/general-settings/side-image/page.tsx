/* eslint-disable react/self-closing-comp */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import BackupIcon from '@mui/icons-material/Backup'
import EditIcon from '@mui/icons-material/Edit'
import Image from 'next/image'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import CustomLoader from '@/admin-components/common/CustomLoader'
import useHomeBgId from '@/utils/useHomeBgId'
import {
  getSideImageRequest,
  sideImageRequest,
} from '@/utils/api-requests/sieImage.request'

function SideImage() {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)
  const homeBgId = useHomeBgId()
  const [image, setImage] = useState('' as any)
  const [imageUrl, setImageUrl] = useState('' as any)
  console.log('image uri is ', imageUrl)

  const hanldeFileChange = async (e: any) => {
    const file = e.target.files?.[0]
    setImage(file)
    console.log('file is ', file)
    startTransition(async () => {
      const formData = new FormData()
      formData.append('file', file as any)
      formData.append('upload_preset', 'j8epfynh')
      const res = await uploadImgToCloudinary(formData)
      console.log('url => ', res?.secure_url)
      setImageUrl(res?.secure_url)
    })
  }

  const getSideImage = async () => {
    try {
      startTransition(async () => {
        const res = await getSideImageRequest()
        const data = res?.data
        if (data?.status === 200) {
          setImageUrl(data?.data?.image)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddSideImage = async () => {
    if (!imageUrl) {
      setAlertMsg({ type: 'error', message: 'Please upload image.' })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      return
    }
    if (!homeBgId) {
      setAlertMsg({ type: 'error', message: 'Home id not found.' })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      return
    }
    try {
      startTransition(async () => {
        const res = await sideImageRequest({ image: imageUrl, homeBgId })
        const data = res?.data
        if (data?.status === 201) {
          getSideImage()
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
    getSideImage()
  }, [])

  return (
    <Box sx={{ pb: 4 }}>
      <CustomCard sx={{ padding: '40px !important' }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
        <HeadingWraper
          title="Home Side Image"
          handleSave={handleAddSideImage}
          detectChange={detectChange}
        />

        <Box>
          <label htmlFor="bgFileInput">
            <input
              type="file"
              id="bgFileInput"
              hidden
              onChange={hanldeFileChange}
            />
            <Box
              sx={{
                width: '100%',
                minHeight: '300px',
                maxHeight: '450px',
                border: '1px dashed gray',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                mt: 4,
              }}
            >
              {image || imageUrl ? (
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
                    src={imageUrl || URL.createObjectURL(image)}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
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
                    Upload Home Side Image
                  </Typography>
                </>
              )}
            </Box>
          </label>
        </Box>
      </CustomCard>
    </Box>
  )
}

export default SideImage
