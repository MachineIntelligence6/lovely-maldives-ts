'use client'

import { Box, Stack } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'
import TextFieldWraper from './TextfieldWraper'

function LogoInputFile() {
  const [file, setFile] = useState('')
  const [previewUrl, setPreviewUrl] = React.useState('')
  const [values, setValues] = useState({ width: 95, height: 60 })

  const handleWidthHeightChange = (e: any) => {
    const { name, value } = e.target
    if (value > 1000) return
    setValues({ ...values, [name]: value })
  }

  const hanldeChange = (e: any) => {
    const value = e.target.files[0]
    setFile(value)
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string)
    }
    fileReader.readAsDataURL(value)
  }
  return (
    <Stack direction="row" alignItems="start" gap="1.5rem">
      <label htmlFor="fileInput">
        <input id="fileInput" type="file" hidden onChange={hanldeChange} />
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
          {previewUrl ? (
            <Image
              width={values?.width}
              height={values?.height}
              alt="logo-img"
              style={{
                objectFit: 'contain',
                width: `${values?.width}px`,
                height: `${values?.height}px`,
              }}
              src={previewUrl}
            />
          ) : (
            <Image
              width={values?.width}
              height={values?.height}
              alt="logo-img"
              style={{
                objectFit: 'contain',
                width: `${values?.width}px`,
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
          name="width"
          value={values.width}
          onChange={handleWidthHeightChange}
        />
        <TextFieldWraper
          label="Logo Height"
          type="number"
          placeholder="Enter logo height."
          value={values.height}
          name="height"
          onChange={handleWidthHeightChange}
        />
      </Box>
    </Stack>
  )
}

export default LogoInputFile
