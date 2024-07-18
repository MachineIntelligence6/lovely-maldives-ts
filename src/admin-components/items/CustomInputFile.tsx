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

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="start"
      gap="1.5rem"
      sx={{ width: { xs: '100%', md: 'auto' } }}
    >
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
            bgcolor: 'silver',
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
      <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
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
