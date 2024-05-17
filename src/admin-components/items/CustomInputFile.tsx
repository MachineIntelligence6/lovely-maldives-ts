'use client'

import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'

function LogoInputFile() {
  const [file, setFile] = useState('')
  const [previewUrl, setPreviewUrl] = React.useState('')

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
    <Box>
      <label htmlFor="fileInput">
        <input id="fileInput" type="file" hidden onChange={hanldeChange} />
        <Box
          sx={{
            position: 'relative',
            maxWidth: '200px',
            maxHeight: '160px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #ccc',
            cursor: 'pointer',
            p: 2,
          }}
        >
          {previewUrl ? (
            <Image
              width={180}
              height={140}
              alt="logo-img"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              src={previewUrl}
            />
          ) : (
            <Image
              width={180}
              height={140}
              alt="logo-img"
              style={{ objectFit: 'contain' }}
              src="/logo.png"
            />
          )}
        </Box>
      </label>
    </Box>
  )
}

export default LogoInputFile
