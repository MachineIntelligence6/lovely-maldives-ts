'use client'

import { Box, Stack } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'
import TextFieldWraper from './TextfieldWraper'

function LogoInputFile(props: any) {
  const {
    handleValuesChange,
    nameWidth,
    nameHeight,
    value,
    hanldeFileChange,
    logoUrl,
    values,
    width,
    height,
    logoFor,
  } = props
  const [file, setFile] = useState('')
  const [previewUrl, setPreviewUrl] = React.useState('')
  // const [values, setValues] = useState({ width: 95, height: 60 })

  // const handleWidthHeightChange = (e: any) => {
  //   const { name, value } = e.target
  //   if (value > 1000) return
  //   setValues({ ...values, [name]: value })
  // }

  // const hanldeChange = async (e: any) => {
  //   const value = e.target.files[0]
  //   setFile(value)
  //   // const fileReader = new FileReader()
  //   // fileReader.onload = () => {
  //   //   setPreviewUrl(fileReader.result as string)
  //   // }
  //   // fileReader.readAsDataURL(value)

  //   const formData = new FormData()
  //   formData.append('file', value)
  //   formData.append('upload_preset', 'j8epfynh')

  //   try {
  //     const response = await fetch(
  //       `https://api.cloudinary.com/v1_1/de1fnstbu/image/upload`,
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     )

  //     if (!response.ok) {
  //       throw new Error('Error uploading image')
  //     }

  //     const data = await response.json()
  //     console.log('Image URL:', data.secure_url)
  //     setPreviewUrl(data.secure_url)
  //   } catch (error) {
  //     console.log('error ', error)
  //   }
  // }
  return (
    <Stack direction="row" alignItems="start" gap="1.5rem">
      <label htmlFor={logoFor}>
        <input id={logoFor} type="file" hidden onChange={hanldeFileChange} />
        <Box
          sx={{
            position: 'relative',
            width: '200px',
            height: '160px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #ccc',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          {previewUrl || logoUrl ? (
            <Image
              width={width}
              height={height}
              alt="logo-img"
              style={{
                objectFit: 'contain',
                width: `${width}px`,
                height: `${height}px`,
              }}
              src={logoUrl || previewUrl}
            />
          ) : (
            <Image
              width={width}
              height={height}
              alt="logo-img"
              style={{
                objectFit: 'contain',
                width: `${value}px`,
                height: `${values?.height}px`,
              }}
              src="/logo.png"
            />
          )}
        </Box>
      </label>
      <Box>
        <TextFieldWraper
          label="Logo Width"
          type="number"
          placeholder="Enter logo width"
          name={nameWidth}
          value={width}
          onChange={handleValuesChange}
        />
        <TextFieldWraper
          label="Logo Height"
          type="number"
          placeholder="Enter logo height."
          name={nameHeight}
          value={height}
          onChange={handleValuesChange}
        />
      </Box>
    </Stack>
  )
}

export default LogoInputFile
